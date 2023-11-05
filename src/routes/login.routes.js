import { Router } from "express";
import { loginUser,registerUser } from "../auth/auth.controller.js";
import { check } from "express-validator";
import { validarCampos } from "../middlewares/validateCampos.js";
import { verifySignUp } from "../middlewares/verifySignUp.js";


//aca definimos las rutas por donde se van a ubicar cada controlador
//por ende debemos tener cuidado que vamos a escribir, por que si se escribe mal,lanza un error de ruta

const router = Router();

//enpoint para loguear un usuario, una vez se haya registrado.
router.get('/login', loginUser);


//endpoint para poder registrar un usuario. Los metodos check, sirven para hacer validaciones extras antes de poder hacer un registro en la base de datos.
router.post('/register',[
    check('name', 'debe contener nombre').isLength({min: 5}),
    check('age', 'debe contener dos numeros').isLength({max: 2}),
    check('email', 'el mail debe ser correcto').isEmail().not().isEmpty(),
    validarCampos,
    verifySignUp,
], registerUser)

//el registro tiene varios metodos de validaciones, como middlewares.
//de esta manera es mas seguro que nadie ingrese datos erroneos o no correspondientes.



export default router