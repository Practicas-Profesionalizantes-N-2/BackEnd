import { Model, DataTypes } from 'sequelize';
import sequelize from '../db/config.js';



class User extends Model { }

User.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    age: {
        type: DataTypes.STRING,
        allowNull: false
    }
},
    {
        sequelize,
        modelName: 'User'
    });
      

User.sync()
    .then(() => {
        console.log('La tabla de usuarios ha sido creada');
    })
    .catch((error) => {
        console.error('Error al crear la tabla de usuarios: ', error);
    });

export default User;