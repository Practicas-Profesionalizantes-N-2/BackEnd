import bcrypt from 'bcryptjs';
import User from '../models/user.js';


//funcion que pueda registrarse un usuario a partir de ciertas credenciales necesarias como nombre,apellido,etc
export const registerUser = async (req, res) => {

    //extraigo del cuerpo de la solicitud los datos que ingresa el usuario
    const { name, lastname, age, password, email } = req.body;


    try {

        //se encripta la contraseña por mas seguridad
        const salt = 10;
        const hashPassword = await bcrypt.hash(password, salt);


        //aca se guarda el usuario en la base de datos pasandole los parametros mencionados anteriormente
        const user = await User.create({ name, lastname, age, password: hashPassword, email })

        
        //valida si la contraseña fue encriptada o no, si hubo error tire un codigo 400,de error
        if (!hashPassword) {
            res.status(400).json({ msg: 'error al encriptar contraseña' })
        }
        //pero si fue correcto, mande un mensaje avisando que fue creado correctamente
        else {
            res.status(201).json({
                msg: 'creado correctamente',
                user
            })
        }


        //capturamos cualquier tipo de error que se este pasando por alto
    } catch (error) {
        console.log(error)
       
    }


}



//funcion para que un usuario inice sesion con su cuenta ya creada
export const loginUser = async (req, res) => {

    //capturamos los campos que se pasen por el cuerpo de la solicitud
    const { email, password } = req.body


    try {

        //buscamos en nuestra base de datos un usuario en donde se cumpla la siguiente solicitud
        const userFound = await User.findOne({
            //busca el igual donde el email ingresado sea igual al que este guardado en la base
            where: { email: email }
        })

        //en caso que no coincidan, lance un error 500 que no se encontro el usuario
        if (!userFound) return res.status(500).json({ msg: 'user not found' })


        //aca comprobamos si la contraseña que ingresa es la misma que este en la base
        const matchPassword = await bcrypt.compare(password, userFound.password)

        //si la contraseña no coincide, lance un error 500 diciendo que la contraseña es invalida
        if (!matchPassword) return res.status(500).json({ msg: 'invalid password' })


        //si todo lo otro funciono, avise que se logueo con exito
        res.status(200).json({ msg: 'login success' });

    } catch (error) {
        //captura un error en caso que lo anterior falle
        res.status(500).json({ msg: 'internal server error' }, error)
    }

}