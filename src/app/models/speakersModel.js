import config from '../../config/environment.js'
import databaseConnector from '../models/databaseConnector.js'
const dbClient = new databaseConnector(config);

await dbClient.run('speakers');

export default dbClient;
