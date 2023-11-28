import { Router } from "express";
import { loginUser,createUser, getAllUsers } from "../controllers/user.controller.js";
import { check } from "express-validator";
import { validarCampos } from "../middlewares/validateCampos.js";
import { loginAuthentication } from "../middlewares/loginAuthentication.js";
import { verifySignUp } from  "../middlewares/verifySignUp.js";


const router = Router();

//Ruta para obtener todos los usuarios en la base de datos
router.get('/users', getAllUsers);


//ruta para que el usuario pueda registrarse
router.post('/register' , [
    check('name', 'el Nombre debe contener al menos 3 caracteres ').isLength({min: 3}),
    check('lastname', 'el Apellido debe contener al menos 3 caracteres ').isLength({min: 3}),
    check('age', 'Revise el campo edad').isLength({max: 3, min: 1}),
    check('email', 'Revise el correo electronico').isEmail().not().isEmpty(),
    check('password', 'La contraseña requiere como minimo 8 carácteres, una mayúscula, una minúscula, un número y un símbolo').isStrong().not().isEmpty(),
    validarCampos, verifySignUp, 
], createUser)


//peticion POST login verificacion credenciales
router.post('/login', [
    check('email', 'El Email o Contraseña es incorrecto.').isEmail(),
    check('password', 'El Email o Contraseña es incorrecto.').not().isEmpty(),
    validarCampos, 
    loginAuthentication,
    loginUser,
], async (req, res) => {
    loginUser (req, res);
    
});
    




export default router