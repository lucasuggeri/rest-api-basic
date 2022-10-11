import { MongoClient } from "mongodb";
import { UUID } from "bson";

class MongoConnector {
  //cria o contrutor
  constructor(config) {
    //faz a propriedade database do mongodb receber o db_database de environment
    this.database = config.db_database;
    //faz a variável uri receber os dados de conexão do db
    this.uri = `mongodb://${config.db_username}:${config.db_password}@${config.db_hostname}:${config.db_port}`;
  }
  //???
  async run(collection) {
    this.client = new MongoClient(this.uri, {
      //???
      useUnifiedTopology: true,
      //cria uma Primary key a partir de um id único universal (?)
      pkFactory: { createPk: () => new UUID().toString() },
    });
    //da o comando de conectar
    this.client.connect();
    //faz a variável collection receber a tabela collection do banco de dados database
    this.collection = this.client.db(this.database).collection(collection);
  }
  //retorna uma informação da collection numa array
  async find(data) {
    const [result] = await this.collection.find(data).toArray();
    return result;
  }
  //retorna a collection inteira numa array
  async findAll(data) {
    const result = await this.collection.find(data).toArray();
    return result;
  }
  //insere dados na collection
  async insert(data) {
    return await this.collection.insertOne(data);
  }
  //remove dados da collection
  async remove(data) {
    return await this.collection.deleteOne(data);
  }
  //atualiza dados da collection
  async update(target, data) {
    return this.collection.replaceOne(target, data);
  }
}

export default MongoConnector;
