import config from '#config';
import util from 'util';
import {exec} from 'child_process';
import {resolve} from 'path'; 

const cwd = resolve('./database/seed')
const input = 'backups/movieData.json'

const execPromise = util.promisify(exec);

async function importJSON() {
    let command = `mongoimport --uri ${config.dbURL} --collection movies --drop --file ${input} --jsonArray`;
    await execPromise(command, {cwd}).then(results => console.log(results.stderr, results.stdout))
}

importJSON()


