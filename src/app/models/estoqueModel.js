import config from '../../config/environment.js'
import databaseConnector from './databaseConnector.js'
const dbClient = new databaseConnector(config);

await dbClient.run('estoque');

export default dbClient;
