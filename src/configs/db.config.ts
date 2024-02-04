import { Dialect } from "sequelize";
export interface IConfig {
    url: string;
    dialect: Dialect;
    pool: {
        max: number;
        min: number;
        acquire: number;
        idle: number;
    }
}

const getDBConfig = (): IConfig => {

    const DATABASE_URL = process.env.DATABASE_URL;

    if (!DATABASE_URL) {
        throw new Error('DATABASE_URL not provided.');
    }


    return {
        url:DATABASE_URL,
        dialect:'postgres',
        pool:{
            max:5,
            min:0,
            acquire:30000,
            idle:10000
        }
    };
};

const config = getDBConfig();

export default config;
