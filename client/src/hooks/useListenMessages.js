import { useEffect } from "react"

import { useSocketContext } from "../context/SocketContext"
import useConversation from "../zustand/useConversation"

const useListenMessages = () => {
  const { socket } = useSocketContext()
  const {messages, setMessages} = useConversation()

  useEffect(() => {
    console.log("Listening for new messages...");
    
    socket?.on("newMessage", (newMessage) => {
      newMessage.shouldShake = true
      setMessages([...messages, newMessage])
      console.log(newMessage, messages)
    })

    return () => socket?.off("newMessage")
  }, [socket, setMessages, messages])
}

export default useListenMessages