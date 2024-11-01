import React from 'react'
import { useAuthContext } from '../../context/AuthContext'
import useConversation from '../../zustand/useConversation'

const Message = ({message}) => {
  const {selectedConversation} = useConversation()
  
  const isSender = selectedConversation._id === message.senderId
  
  return (
    <div>
        <div className={`chat ${isSender ? 'chat-end' : 'chat-start'}`}>
            <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                    <img
                    alt="Tailwind CSS chat bubble component"
                    src="https://avatar.iran.liara.run/public/boy" />
                </div>
            </div>
            <div className="chat-bubble">{message.message}</div>
            <div className="chat-footer opacity-50">11:56</div>
        </div>
    </div>
  )
}

export default Message