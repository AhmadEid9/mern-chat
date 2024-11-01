import React from 'react'
import useConversation from '../zustand/useConversation'
const Conversation = ({conversation, online, emoji, lastIdx}) => {
    const {selectedConversation, setSelectedConversation} = useConversation()
  return (
    <div>
        <div onClick={() => setSelectedConversation(conversation)} className={`flex gap-2 hover:bg-sky-500 rounded p-2 py-1 cursor-pointer ${selectedConversation == conversation._id ? 'bg-sky-500' : ''}`}>
            <div className={`avatar ${online ? 'online' : 'offline'}`}>
                <div className="w-12 rounded-full">
                    <img src={conversation.profilePic} alt="User Image" />
                </div>
            </div>
            <div className="flex flex-col flex-1">
                <div className="flex gap-3 justify-between">
                    <p>{conversation.fullname}</p>
                    <span className='text-xl'>{emoji}</span>
                </div>
            </div>
        </div>
        {!lastIdx && <div className="divider my-0 py-0 h-1"/>}
    </div>
  )
}

export default Conversation