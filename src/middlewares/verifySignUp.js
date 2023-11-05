import User from '../models/user.js';


//funcion que comprueba que si el email ingresado a la hora de registrarse, ya no este creado y almacenado en la base de datos. De esta manera nos aseguramos que no hayan dos emails identicos guardados.

export const verifySignUp = async (req, res, next) => {

    const { email } = req.body;

  try {
   
    //buscamos en la base de datos comparando si el mail ingresado coincide con el que esta almacenado
    const existingUser = await User.findOne(
        {  
            where: { email: email } 
        }
    );

    //si existe el mail,lance un error diciendo que el correo ya esta registrado
    if (existinEmail) {
      return res.status(400).json({ msg: 'El correo electrónico ya está registrado.' });
    }

    //aca capturamos algun error externo para verificar si algo anda mal
  } catch (error) {
    console.error('Error en el middleware verifySignUp:', error);
    return res.status(500).json({ msg: 'Error interno del servidor' });
  }


  //esta palabra verifica que si lo anterior paso correctamente, sigue con las funciones que le sigue
  //se usa como middleware antes de entrar a las funciones principales, como en los controladores.
  next();


}; 