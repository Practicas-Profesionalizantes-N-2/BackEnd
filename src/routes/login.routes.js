import { Router } from "express";
import { loginUser,createUser } from "../controllers/user.controller.js";
import { check } from "express-validator";
import { validarCampos } from "../middlewares/validateCampos.js";

const router = Router();


router.get('/login', loginUser);

router.post('/register',[
    check('name', 'debe contener nombre').isLength({min: 5}),
    check('age', 'debe contener dos numeros').isLength({max: 2}),
    check('email', 'el mail debe ser correcto').isEmail().not().isEmpty(),
    validarCampos,
], createUser)



export default router