import { Router } from "express";
import { loginUser,registerUser } from "../auth/auth.controller.js";
import { check } from "express-validator";
import { validarCampos } from "../middlewares/validateCampos.js";

const router = Router();

//enpoint para loguear un usuario, una vez se haya registrado.
router.get('/login', loginUser);


//endpoint para poder registrar un usuario. Los metodos check, sirven para hacer validaciones extras antes de poder hacer un registro en la base de datos.
router.post('/register',[
    check('name', 'debe contener nombre').isLength({min: 5}),
    check('age', 'debe contener dos numeros').isLength({max: 2}),
    check('email', 'el mail debe ser correcto').isEmail().not().isEmpty(),
    validarCampos,
], registerUser)



export default router