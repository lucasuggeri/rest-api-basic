import {MongoClient} from 'mongodb'
import { UUID } from 'bson';

class MongoConnector{
    constructor(config){
        console.log(config)
        this.database = config.db_database;
        this.uri = `mongodb://${config.db_username}:${config.db_password}@${config.db_url}:${config.db_port}`;
    }
    async run(collection){
        this.client = new MongoClient(this.uri, {
            useUnifiedTopology: true,
            pkFactory: { createPk: () =>  new UUID().toString() }
          });
        this.client.connect();
        this.collection = this.client.db(this.database).collection(collection);
    }
    async find(data){
        const [result] = await this.collection.find(data).toArray();
        return result;

    }
    async findAll(data){
        const result = await this.collection.find(data).toArray();
        return result;
    }
    async insert(data){

        return await this.collection.insertOne(data);
    }
    async remove(data){
        return await this.collection.deleteOne(data);
    }
    async update(target,data){
        return this.collection.replaceOne(target,data);
    }
}

export default MongoConnector;