import config from '#config';
import util from 'util';
import {exec} from 'child_process';
import {resolve} from 'path'; 

const cwd = resolve('./database/seed/backups')
const execPromise = util.promisify(exec);

async function backup() {
    //VERSION EXPORTING .bson FILES FOR ENTIRE DB TO SPECIFIC DIRECTORY
    console.log(`---- Creating db backup / seed ----\n`);
    let backupDirName = new Date().toISOString();
    let command = `mongodump --uri ${config.dbURL} --out ./${backupDirName}/`;
    await execPromise(command, {cwd}).then(results => console.log(results.stderr, results.stdout))
    // return execPromise(command, {
    //     cwd: config.resolveDB('seed/dumps'),
    // }) //dump the contents to file
    //     .then((results) => {
    //         console.log(results.stderr);
    //     });
}

backup()