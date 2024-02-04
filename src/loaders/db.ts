import { Options, Sequelize } from "sequelize";
import dbConfig from "../config/db.config";

class DB {
    private conn:Sequelize|null
    constructor(dbConfig:Options) {
        this.conn = new Sequelize(dbConfig)
        console.log('DB initialized')
    }
}

const dataBaseConnection = new DB(dbConfig)
export default dataBaseConnection