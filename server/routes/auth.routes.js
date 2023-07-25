// import express router
import { Router } from "express";
import { register, login, logout } from "../controllers/auth.controller.js";

// initialize router
const router = Router();

// define routes
router.post('/register', register)

router.post('/login', login)

router.post('/logout', logout)

export default router;