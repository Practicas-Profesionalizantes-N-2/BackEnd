import User from '../models/user.js';

export const verifySignUp = async (req, res, next) => {
  try {
    const { email } = req.body;

    const existingUser = await User.findOne({ where: { email } });

    if (existingUser) {
      return res.status(400).json({ msg: 'El correo electrónico ya está registrado.' });
    }

    next();
  } catch (error) {
    console.error('Error en el middleware verifySignUp:', error);
    return res.status(500).json({ msg: 'Error interno del servidor' });
  }
};






