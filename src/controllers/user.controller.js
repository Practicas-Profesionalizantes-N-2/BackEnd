


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