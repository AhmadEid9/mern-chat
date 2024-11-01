import React from 'react'
import { useAuthContext } from '../../context/AuthContext'
import useConversation from '../../zustand/useConversation'
import { format } from 'date-fns'

const Message = ({message}) => {
  const {selectedConversation} = useConversation()
  const {authUser} = useAuthContext()
  const authUserObj = JSON.parse(authUser)
  

  const isSender = authUserObj._id === message.senderId
  const chatClassName = isSender ? 'chat-end' : 'chat-start'
  const profile = isSender ? authUserObj.profilePic : selectedConversation.profilePic
  const bubbleBgColor = isSender ? 'bg-blue-900' : 'bg-gray-700'
  const createdTime = format(message.createdAt, 'hh:mm a')
  return (
    <div>
        <div className={`chat ${chatClassName}`}>
            <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                    <img
                    alt="Tailwind CSS chat bubble component"
                    src={profile} />
                </div>
            </div>
            <div className={`chat-bubble ${bubbleBgColor}`}>{message.message}</div>
            <div className="chat-footer text-white opacity-50">{createdTime}</div>
        </div>
    </div>
  )
}

export default Message