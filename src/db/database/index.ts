import { Sequelize, Options } from 'sequelize';
import { IConfig, dbconfig } from '../../configs';

class Database {
  private connection: Sequelize | undefined;

  constructor(dbconfig: IConfig) {
    this.connectToDatabase(dbconfig);
  }

  private async connectToDatabase(dbconfig: IConfig) {
    try {
      const options: Options = {
        dialect: dbconfig.dialect,
        pool: {
          max: dbconfig.pool.max,
          min: dbconfig.pool.min,
          acquire: dbconfig.pool.acquire,
          idle: dbconfig.pool.idle,
        },
      };

      this.connection = new Sequelize(dbconfig.url, options);

      await this.connection.authenticate();
      console.log('DB connection successfully established');
    } catch (err) {
      console.log('Cannot connect to the database. Retrying in 5 seconds.', err);
      await this.delay(5000);
      await this.connectToDatabase(dbconfig);
    }
  }

  private delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  public getConnection(): Promise<Sequelize> {
    return new Promise((resolve, reject) => {
      const checkConnection = () => {
        if (this.connection) {
          resolve(this.connection);
        } else {
          setTimeout(checkConnection, 1000);
        }
      };

      checkConnection();
    });
  }
}

const db = new Database(dbconfig);
export default db;
