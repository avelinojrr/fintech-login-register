// import express router
import { Router } from "express";
import { register, login, logout, profile } from "../controllers/auth.controller.js";
import { authRequired } from "../middlewares/validateToken.js";

// initialize router
const router = Router();

// define routes
router.post('/register', register)

router.post('/login', login)

router.post('/logout', logout)

router.get('/profile', authRequired, profile)

export default router;