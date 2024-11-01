import { useEffect, useState } from "react"
import useConversation from "../zustand/useConversation"
import toast from "react-hot-toast"
import axios from "axios"

const useGetMessages = () => {
    const [loading, setLoading] = useState(false)
    const {selectedConversation, messages, setMessages} = useConversation()

    useEffect(() => {
        const getMessages = async() => {
            setLoading(true)
            console.log(selectedConversation);
            
            try {
                const res = await axios.get(`/api/message/${selectedConversation._id}`)
                console.log('messages response:', res);
                
                setMessages(res.data)
            } catch (error) {
                toast.error(error.response.data.error)
                
            } finally {
                setLoading(false)
            }
        }
        if (selectedConversation?._id) getMessages()
    }, [selectedConversation?._id, setMessages])

    return {loading, messages}
}

export default useGetMessages