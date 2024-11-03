import { useEffect } from "react"
import { useSocketContext } from "../context/SocketContext"
import useConversation from "../zustand/useConversation"

const useListenMessages = () => {
  const { socket, onlineUsers } = useSocketContext()
  const {messages, setMessages} = useConversation()

  useEffect(() => {
    if (socket){
        socket?.on('newMessage', (message) => {
            setMessages([...messages, message])
        })
    }

    return () => socket?.off('newMessage')
  }, [socket, messages, setMessages])
}

export default useListenMessages