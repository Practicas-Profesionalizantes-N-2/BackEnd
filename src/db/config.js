import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(
    'db-practicas',
    'root',
    '',
    {
        host: "localhost",
        dialect: 'mysql'
    }
);

export default sequelize;