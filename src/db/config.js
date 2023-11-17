import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(
    'PracticasProfII',
    'root',
    '',
    {
        host: "localhost",
        dialect: 'mysql'
    }
);

export default sequelize;
