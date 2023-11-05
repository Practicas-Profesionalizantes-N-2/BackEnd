import User from '../models/user.js';


//metodo para traer los usuarios en lista 
export const getAllUsers = async (req, res) => {

    try {
        //busca en la base de datos todos los usuarios que este almacenados
        const users = await User.findAll();
        res.status(200).json({
            users,
            ok: true
        })
    }
    //capturar un error y lo muestre por consola.
    catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Error al obtener los usuarios',
        })
    }
}


//funcion para obtener un usuario por su id
export const getUserById = (req,res) => {

    res.status(200).json({
        msg: 'show user by id'
    })

}


//funcion para crear un usuario
export const createUser = (req,res) => {

    res.status(200).json({
        msg: 'create User'
    })

}


//funcion para actualizar un usuario por su id
export const updateUserById = (req,res) => {

    const  {id} = req.body
 
    res.status(200).json({
        msg: 'update user by id'
    })

}

//funcion para eliminar un usuario por su id
export const deleteUser = (req,res) => {

    const {id} = req.body

    res.status(200).json({
        msg: 'show user by id'
    })

}