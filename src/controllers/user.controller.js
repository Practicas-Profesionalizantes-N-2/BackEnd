import User from '../models/user.js';
<<<<<<< HEAD
import bcrypt from 'bcryptjs';

=======


//metodo para traer los usuarios en lista 
>>>>>>> 661312974194720fb8d3d5554d267a6f6f0cdaf6
export const getAllUsers = async (req, res) => {

    try {
        const users = await User.findAll();
        res.status(200).json({
            users,
            ok: true
        })
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Error al obtener los usuarios',
        })
    }
}


<<<<<<< HEAD
export const loginUser = (req, res) => {

    res.status(200).json({
        msg: 'logueado con exito'
    })


}

export const createUser = async (req,res) => {

    const {name,lastname,age, password,email} = req.body;

    const salt = 10;
    const hashPassword = await bcrypt.hash(password, salt);

    const nuevoUsuario = {
        name,
        lastname,
        age,
        password: hashPassword,
        email
    };

  

    if(!hashPassword){
        res.status(400).json({msg: 'error al encriptar contraseña'})
    }
    else{
        res.status(201).json({
            msg: 'creado correctamente',
            name,
            lastname,
            age,
            password,
            email,
            hashPassword
        })
    }
    const user = await User.create(nuevoUsuario);

}
=======
export const getUserById = (req,res) => {

    res.status(200).json({
        msg: 'show user by id'
    })

}

export const createUser = (req,res) => {

    res.status(200).json({
        msg: 'create User'
    })

}

export const updateUserById = (req,res) => {

    const  {id} = req.body
 
    res.status(200).json({
        msg: 'update user by id'
    })

}

export const deleteUser = (req,res) => {

    const {id} = req.body

    res.status(200).json({
        msg: 'show user by id'
    })

}
>>>>>>> 661312974194720fb8d3d5554d267a6f6f0cdaf6
