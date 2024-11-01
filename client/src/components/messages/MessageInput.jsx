import React, { useState } from 'react'
import { FaPaperPlane } from 'react-icons/fa'
import useSendMessage from '../../hooks/useSendMessage'

const MessageInput = () => {
  const [message, setMessage] = useState('')
  const {loading, sendMessage} = useSendMessage()
  
  const handleSendMessage = async () => {
    if(!message.trim()) return

    await sendMessage(message)
    setMessage('')
  }

  const handleEnterKeyDown = async (event) => {
    if(!message.trim()) return

    if (event.key === "Enter")
    {
      await sendMessage(message)
      setMessage("")
    }
  }
  return (
    <div className='px-4 my-3'>
        <div className="w-full relative">
            <input
            className='border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white'
            type="text"
            placeholder='Send a message...'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleEnterKeyDown}
            />
            <button disabled={message.trim() === ""} className='absolute inset-y-0 end-0 flex items-center pe-3' onClick={handleSendMessage}>
              {loading ? 
                <span className='loading loading-spinner'/>
                : 
                <FaPaperPlane className={message.trim() === "" ? "" : 'hover:text-white'}/>
              }
            </button>
        </div>

    </div>
  )
}

export default MessageInput