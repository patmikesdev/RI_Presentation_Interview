import config from '#config';
import util from 'util';
import {exec} from 'child_process';
import {resolve} from 'path'; 

const cwd = resolve('./database/seed/backups')
//hardcoded backup name value, could update later to use most recent backup, earliest, etc
const input = '2024-09-11T18:17:26.013Z'

const execPromise = util.promisify(exec);

async function restore() {
    //couldn't use full config.dburl, requires db be left unspecified, reads what db to restore to from backup data
    let command = `mongorestore --host ${config.dbHost} --port ${config.dbPort} --drop --dir ${input}`;
    await execPromise(command, {cwd}).then(results => console.log(results.stderr, results.stdout))
}

restore()