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
    check('name', 'debe contener al menos 3 caracteres, ').isLength({min: 3}),
    check('age', 'debe contener dos numeros').isLength({max: 2}),
    check('email', 'el mail debe ser correcto').isEmail().not().isEmpty(),
    validarCampos, verifySignUp, 
], createUser)


//peticion POST login verificacion credenciales
router.post('/login', [
    check('email', 'El Email es requerido.').isEmail(),
    check('password', 'La contraseña es requerida.').not().isEmpty(),
    validarCampos, 
    loginAuthentication,
    loginUser,
], async (req, res) => {
    loginUser (req, res);
    
});
    




export default router