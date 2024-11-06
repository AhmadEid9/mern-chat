import User from "../db/models/userModel.js"
import generateTokenAndSetCookie from "../utils/generateTokens.js"
import bcrypt from "bcryptjs"

const loginUser = async (req, res) => {
    try {
        const { username, password } = req.body

        const user = await User.findOne({ username })

        if (!user) {
            return res.status(400).json({ error: 'User not found' })
        }

        const isMatch = await bcrypt.compare(password, user?.password || '')

        if (!isMatch) {
            return res.status(400).json({ error: 'Incorrect password' })
        }

        generateTokenAndSetCookie(user._id, res)

        res.status(200).json({ 
            _id: user._id,
            fullname: user.fullname,
            username: user.username,
            profilePic: user.profilePic
         })
    } catch (error) {
        console.error("Error while loging In user", error.message);
        return res.status(500).json({ error:"Internal Server Error" })
    }
}

const registerUser = async(req, res) => {
    try {
        const { fullname, username, password, confirmPassword, gender } = req.body

        if (password !== confirmPassword) {
            return res.status(400).json({ error: 'Passwords do not match' })
        }

        const user = await User.findOne({ username })

        if (user) {
            return res.status(400).json({ error: 'Username already exists' })
        }

        const salt = await bcrypt.genSalt(15)
        const hashedPassword = await bcrypt.hash(password, salt)

        
		const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
		const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

        const newUser = new User({
            fullname,
            username,
            password: hashedPassword,
            gender,
            profilePic: gender === "male" ? boyProfilePic : girlProfilePic,
        })
        if (newUser) {
        
            generateTokenAndSetCookie(newUser._id, res)

            await newUser.save()

            return res.status(201).json({ 
                _id: newUser._id,
                fullname: newUser.fullname,
                username: newUser.username,
                profilePic: newUser.profilePic
             })
        } else {
            return res.status(400).json({ error: 'Invalid user data' })
        }

    } catch (error) {
        console.error("Error while registering user", error.message);
        return res.status(500).json({ error:"Internal Server Error" })
    }
}
const logoutUser = async (req, res) => {
    try {
        res.cookie('jwt', '', {maxAge: 0})
        return res.status(200).json({ success: true })

    } catch (error) {
        console.error("Error while loging Out user", error.message);
        return res.status(500).json({ error:"Internal Server Error" })
    }
}

export { loginUser, registerUser, logoutUser }