import { Router } from "express";
import { loginUser,createUser, getAllUsers } from "../controllers/user.controller.js";
import { check } from "express-validator";
import { validarCampos } from "../middlewares/validateCampos.js";
import { verifySignUp } from '../middlewares/verifySingUp.js'


const router = Router();


router.get('/login', loginUser);

router.get('/users', getAllUsers)

router.post('/register',[
    check('name', 'debe contener nombre').isLength({min: 5}),
    check('age', 'debe contener dos numeros').isLength({max: 2}),
    check('email', 'el mail debe ser correcto').isEmail().not().isEmpty(),
    validarCampos,
    verifySignUp, 
], createUser)


export default router