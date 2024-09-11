import config from '#config'
import mongoose from 'mongoose'
import makeLogger from '../utils/logger.js'
import chalk from 'chalk'

const mediumorchid = "#ba55d3";
const logger = makeLogger('mongoose', 'magenta')


async function connect() {
    return new Promise((resolve, reject) => {
        if (mongoose.connection.readyState === 1) { //tests to see if an initial connection has already been established, someimtes may want to establish extra connections
            logger(`${chalk.hex(mediumorchid).bold('Creating additional mongoose connection to MongoDB Server')}`)
            resolve(mongoose.createConnection(config.dbURL, {serverSelectionTimeoutMS: 5000}));
        }
        else {
            logger(`${chalk.hex(mediumorchid).bold('Establishing default Mongoose connection')}`)
            resolve(mongoose.connect(config.dbURL,  {serverSelectionTimeoutMS: 5000}));
        }
    })
        .then(m => {
            logger(`${chalk.hex(mediumorchid).bold('Mongoose Connected!')}`)
            registerListeners()})
        .catch(err => {
            logger(`${chalk.hex("#dc143c").bold('Mongoose connection error:')}`)
            logger(`${chalk.hex("#ff6347").bold(err)}`)
        })
}

function registerListeners() {
    mongoose.connection.on('connected', () => {
        logger(`${chalk.hex(mediumorchid).bold('Mongoose connected!')}`) //add in # of connection to log?
    });
    mongoose.connection.on('error', (err) => {
        logger(`${chalk.hex("#dc143c").bold('Mongoose connection error:')}`)
        logger(`${chalk.hex("#ff6347").bold(err)}`)
    });
    mongoose.connection.on('disconnected', () => {
        logger(`${chalk.hex(mediumorchid).bold('Mongoose disconnected')}`)
    });
}

function disconnect() {
    if (mongoose.connection.readyState === 1){
        logger(`${chalk.hex(mediumorchid).bold('Closing Mongoose Connection')}`)
        return mongoose.connection.close();
    }
    else {
        logger(`${chalk.hex(mediumorchid).bold('No open mongoose connection to close')}`)
        return new Promise((resolve, reject) =>{
            resolve()
        })
    }
}

export { connect, disconnect } 