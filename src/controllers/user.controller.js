import User from '../models/user.js';


//metodo para traer los usuarios en lista 
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
