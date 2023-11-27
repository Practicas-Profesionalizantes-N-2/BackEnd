import { Sequelize } from 'sequelize';
//variable en la cual creamos una base de datos y la conectamos, pasando por parametros los datos como
//nombre de la base de datos
//contraseña si tiene
//que tipo de base de dato es

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER | 'admin',
    'Bocateamo',
    {
        host: 'database-practicas.c5mmp0kpjhya.us-east-2.rds.amazonaws.com',
        dialect: 'mysql'
    }
);

export default sequelize;
