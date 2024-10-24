import { Router } from 'express'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { loginUser, logoutUser, registerUser } from '../controllers/authController.js'

const router = Router()

router.post('/register', registerUser)

router.post('/login', loginUser)

router.post('/Logout', logoutUser)

export default router