import jwt from 'jsonwebtoken'
import User from '../db/models/userModel.js'

const protectRoute = async (req, res, next) => {
    try {
        const token = req.cookies.jwt
        if (!token) {
            return res.status(401).json({ error: 'Unauthorized - No token provided' })
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        
        if (!decoded) {
            return res.status(401).json({ error: 'Unauthorized - Invalid token' })
        }

        const user = await User.findById(decoded.userId).select('-password')

        if (!user) {
            return res.status(404).json({ error: 'Unauthorized - User not found' })
        }

        req.user = user
        next()

    } catch (error) {
        console.error("Error in protect route middleware", error.message);
        return res.status(500).json({ error:"Internal Server Error" })
    }
}

export default protectRoute