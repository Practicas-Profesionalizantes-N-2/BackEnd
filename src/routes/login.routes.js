import { Router } from "express";
<<<<<<< HEAD
import { loginUser,createUser, getAllUsers } from "../controllers/user.controller.js";
import { check } from "express-validator";
import { validarCampos } from "../middlewares/validateCampos.js";
import { verifySignUp } from '../middlewares/verifySingUp.js'


const router = Router();


router.get('/login', loginUser);

router.get('/users', getAllUsers)

=======
import { loginUser,registerUser } from "../auth/auth.controller.js";
import { check } from "express-validator";
import { validarCampos } from "../middlewares/validateCampos.js";

const router = Router();

//enpoint para loguear un usuario, una vez se haya registrado.
router.get('/login', loginUser);


//endpoint para poder registrar un usuario. Los metodos check, sirven para hacer validaciones extras antes de poder hacer un registro en la base de datos.
>>>>>>> 661312974194720fb8d3d5554d267a6f6f0cdaf6
router.post('/register',[
    check('name', 'debe contener nombre').isLength({min: 5}),
    check('age', 'debe contener dos numeros').isLength({max: 2}),
    check('email', 'el mail debe ser correcto').isEmail().not().isEmpty(),
    validarCampos,
<<<<<<< HEAD
    verifySignUp, 
], createUser)
=======
], registerUser)

>>>>>>> 661312974194720fb8d3d5554d267a6f6f0cdaf6


export default router