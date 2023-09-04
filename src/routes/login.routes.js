import { Router } from "express";
import { loginUser,createUser } from "../controllers/login.controller.js";

const router = Router();


router.get('/login', loginUser);
router.post('/register', createUser)



export default router