import { Sequelize } from 'sequelize';

//variable en la cual creamos una base de datos y la conectamos, pasando por parametros los datos como
//nombre de la base de datos
//contraseña si tiene
//que tipo de base de dato es
const sequelize = new Sequelize(
    'db-practicas',
    'root',
    '',
    {
        host: "localhost",
        dialect: 'mysql'
    }
);

//exportamos el archivo para usarla en futuras ocaciones
export default sequelize;