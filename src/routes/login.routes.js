import { Router } from "express";
import { loginUser,createUser, getAllUsers } from "../controllers/user.controller.js";

const router = Router();


router.get('/login', loginUser);
router.post('/register', createUser)
router.get('/users', getAllUsers)


export default router