import { Sequelize } from 'sequelize';
//variable en la cual creamos una base de datos y la conectamos, pasando por parametros los datos como
//nombre de la base de datos
//contraseña si tiene
//que tipo de base de dato es

const sequelize = new Sequelize(
    'PracticasProfII',
    'root',
    '',
    {
        host: "127.0.0.1",
        dialect: 'mysql'
    }
);

export default sequelize;
