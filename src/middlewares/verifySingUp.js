// Importa el modelo de usuario desde el archivo '../models/user.js'.
import User from '../models/user.js';

// Define una función middleware llamada 'verifySignUp' que toma los argumentos 'req', 'res' y 'next'.

export const verifySignUp = async (req, res, next) => {
  try {
    // Extrae el campo 'email' del cuerpo de la solicitud.

    const { email } = req.body;
    // Busca en la base de datos si ya existe un usuario con el mismo correo electrónico.

    const existingUser = await User.findOne({ where: { email } });
    // Si se encuentra un usuario con el mismo correo electrónico, devuelve un mensaje de error.

    if (existingUser) {
      return res.status(400).json({ msg: 'El correo electrónico ya está registrado.' });
    }
    // Si no se encuentra un usuario con el mismo correo electrónico, pasa al siguiente middleware.

    next();
  } catch (error) {

    
    // En caso de error, registra el error en la consola y devuelve una respuesta de error.
    console.error('Error en el middleware verifySignUp:', error);
    return res.status(500).json({ msg: 'Error interno del servidor' });
  }
};






