import bcrypt from 'bcryptjs';


export const loginUser = (req, res) => {

    res.status(200).json({
        msg: 'ruta de loguin con exito'
    })


}

export const createUser = async (req,res) => {

    const {name,lastname,age, password,email} = req.body;

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



   



}