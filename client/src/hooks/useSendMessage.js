import { useState } from "react"
import useConversation from "../zustand/useConversation"
import toast from "react-hot-toast"
import axios from "axios"

const useSendMessage = () => {
    const [loading, setLoading] = useState(false)
    const {selectedConversation, messages, setMessages} = useConversation()

    const sendMessage = async(message) => {
        setLoading(true)
        
        try {
            const res = await axios.post(`/api/message/send/${selectedConversation._id}`, {message})            
            setMessages([...messages, res.data])
        } catch (error) {
            toast.error(error.response.data.error)
        } finally {
            setLoading(false)
        }
    }
    return {loading, sendMessage}
}

export default useSendMessage