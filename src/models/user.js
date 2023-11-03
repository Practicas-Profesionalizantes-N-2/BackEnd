import { Model, DataTypes } from 'sequelize';
import sequelize from '../db/config.js';



class User extends Model { }

User.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    lastname: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
<<<<<<< HEAD
=======
    age: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
>>>>>>> 661312974194720fb8d3d5554d267a6f6f0cdaf6
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
<<<<<<< HEAD
    },
    age: {
        type: DataTypes.STRING,
        allowNull: false
    }
},
=======
    }
   },
>>>>>>> 661312974194720fb8d3d5554d267a6f6f0cdaf6
    {
        sequelize,
        modelName: 'User'
    });
      

User.sync()
    .then(() => {
<<<<<<< HEAD
        console.log('La tabla de usuarios ha sido creada');
    })
    .catch((error) => {
        console.error('Error al crear la tabla de usuarios: ', error);
    });
=======
    console.log('La tabla de usuarios ha sido creada');
})
    .catch((error) => {
    console.error('Error al crear la tabla de usuarios: ', error);
});

>>>>>>> 661312974194720fb8d3d5554d267a6f6f0cdaf6

export default User;