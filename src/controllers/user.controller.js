import User from '../models/user.js';

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


export const loginUser = (req, res) => {

    res.status(200).json({
        msg: 'logueado con exito'
    })


}

export const createUser = (req,res) => {

    const {name,lastname,age} = req.body;

    res.status(200).json({
        msg:'usuario registrado',
        name,
        lastname,
        age
    })



}
