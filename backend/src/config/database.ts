import path from 'path'
import { Dialect } from 'sequelize'
import { Sequelize } from 'sequelize-typescript';

function makeDialect (connect: string | undefined): Dialect {
    const possibleDialects = ["mysql", "postgres", "mariadb"]

    if (possibleDialects.includes(connect as string)) {
        return connect as Dialect
    }

    return "mysql"
}

const modelsPath = path.join(__dirname, '..', 'models');

const sequelize = new Sequelize({
    database: process.env.DB_DATABASE,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    dialect: makeDialect(process.env.DB_CONNETION),
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT as string),
    models: [modelsPath]
})

export default sequelize;
