import { Sequelize } from 'sequelize';

// Configuración para la conexión a la base de datos en XAMPP
const sequelize = new Sequelize(
<<<<<<< Updated upstream
    'PracticasProfII',
    'root',
    '',
    {
        host: "localhost",
=======
    'practicasprofii', // Nombre de tu base de datos
    'root', // Usuario por defecto en XAMPP
    '', // Contraseña (vacía)
    {
        host: 'localhost', // Conexión local
>>>>>>> Stashed changes
        dialect: 'mysql'
    }
);

export default sequelize;
