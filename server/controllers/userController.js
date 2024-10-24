import User from "../db/models/userModel.js";

const getUsersForSidebar = async (req, res) => {
    try {

        const loggedUser = req.user._id

        const filteredUsers = await User.find({ _id: { $ne: loggedUser } }).select("-password")

        return res.status(200).json(filteredUsers)
        
    } catch (error) {
        console.error("Error while getting users for sidebar", error.message);
        return res.status(500).json({ error:"Internal Server Error" })        
    }
}

export { getUsersForSidebar }