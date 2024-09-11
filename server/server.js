import config from '#config'
import makeLogger from './utils/logger.js'
import {connect, disconnect} from './database/mongoose.connection.js'
import chalk from 'chalk'
import express from 'express'
import morgan from 'morgan'
import path from 'path'
// import {existsSync} from 'fs'

//Log in console what mode we're in when server starts up (dev, test, prod, etc. )
const { NODE_ENV } = process.env

//custom logging function for making some nice colors in server console. 
const logger = makeLogger('express', 'lime')

//can be useful in more advanced projects to export the express app itself (eg use with proxies, web sockets, etc. =)
export const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))

//automatically serve static assets
// app.use(
//     express.static(config.static, {
//         extensions: ['html', 'css', 'js', 'png', 'ico', 'json', 'pdf'],
//     })
// );

//fall through route handler when no other resource matched request
app.get('*', (req, res, next) => {
    logger(`${chalk.hex('#ff6347').bold(` * route handler hit for ${req.url}`)}`)
    res.redirect('/')
});

//error handler, invoked when an error is thrown in one of the other route handlers
app.use((err, req, res, next) => {
    // debugger;
    logger(err)
    res.status(500).end()
})

//can be useful to export this function, rather than 
export const start = async () => {
    logger(`${chalk.green.bold(`Launching Server: `) + chalk.hex('#00ff00').bold(NODE_ENV === 'development' ? 'Dev Mode' : 'Production Mode')}`)
    startListening()
}

process.on('SIGINT', () => gracefulShutdown('SIGINT'))

//signal used by nodemon to trigger a reload
process.once('SIGUSR2', () => gracefulShutdown('SIGUSR2'))

function startListening() {
    connect()
    .then(() => {
        app.listen(config.port, () => {
            logger(`${chalk.green.bold(`Server Listening @ port:`)} ${chalk.hex("#00ff00").bold(config.port)}`)
            if (NODE_ENV === 'production') {
                // console.log(`---- ${chalk.green.bold(`Serving static files from:`)} ${chalk.hex("#00ff00")).bold(path.relative('../', config.static) + '/')} ----`)
                logger(`${chalk.green.bold(`Serving static files from:`)} ${chalk.hex("#00ff00").bold(path.relative('../', config.static) + '/')}`)
            }
        })
    })
}

let shuttingDown = false
function gracefulShutdown(signal) {
    if(shuttingDown){
        return; // sometimes was getting multiple sigint signals from shutting down mongoose connection, only want to call this once. 
    }
    shuttingDown = true; 
    console.log(''); //starts printing on new line; 
    logger(`${chalk.green.bold('Shutting Down Express Server')}`)
    disconnect()
    .then(() => {
        if (signal === 'SIGUSR2') logger(`${chalk.hex('#ffd700').bold('Nodemon restart triggered for')} ${chalk.yellow.bold('UI Server')}`); 
        process.removeAllListeners()
        logger(`${chalk.green.bold('Express Server Shutdown complete')}`)
        queueMicrotask(process.exit)
    })
}

