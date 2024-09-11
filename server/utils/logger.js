import chalk from 'chalk'

const colors = {
    lime : "#00ff00",
    magenta: "#ff00ff"
}

export default function getLogger(prefix, color) {
    console.log(chalk())
    const start = `--(${chalk.hex(colors[color]).bold(prefix)})-- `
    const finish = ` ----`

    return function logger(message) {
        console.log(start + message + finish)
    }
}