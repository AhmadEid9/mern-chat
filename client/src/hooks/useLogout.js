import { useState } from "react"
import { useAuthContext } from "../context/AuthContext"
import toast from "react-hot-toast"
import axios from "axios"
const useLogout = () => {
    
    const [loading, setLoading] = useState(false)
    const {setAuthUser} = useAuthContext()
    const handleLogout = async() => {
        setLoading(true)
        try {
            const res = await axios.post('http://localhost:4000/api/auth/logout')

            localStorage.removeItem('chat-user')
        
            setAuthUser(null)

            toast.success("Logout Successful")
        } catch (error) {            
            toast.error(error.response.data.error)
        } finally {
            setLoading(false)
        }
    }

    return {loading, handleLogout}
}
export default useLogout