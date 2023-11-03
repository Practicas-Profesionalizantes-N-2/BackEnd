import bcrypt from 'bcryptjs';
import User from '../models/user';
import jwt from 'jsonwebtoken';
import config from '../../config';


export const registerUser = async (req,res) => {

    const {name,lastname,age, password,email} = req.body;


    try {

        const user = await User.create({name,lastname,age,password,email})

        const salt = 10;
        const hashPassword = await bcrypt.hash(password, salt);
    
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
        
    } catch (error) {
        res.status(500).json({msg: 'error in create user'}, error)
    }

  
}



export const loginUser = async (req, res) => {

    const {email, password} = req.body


    try {

        const userFound = await User.findOne({
            where: {email: email}
        })

        if(!userFound) return res.status(500).json({msg: 'user not found'})


        const matchPassword = await bcrypt.compare(password, userFound.password)

        if(!matchPassword) return res.status(500).json({msg: 'invalid password'})


        const token = jwt.sign({id: userFound.id}, config.SECRET, {
            expiresIn: 86400 //24h in seconds
        } )
        
        res.status(200).json({token: token}, {msg: 'login success'})

    } catch (error) {
        res.status(500).json({msg: 'internal server error'}, error)
    }

}