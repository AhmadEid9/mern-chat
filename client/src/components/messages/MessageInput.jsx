import React from 'react'
import { FaPaperPlane } from 'react-icons/fa'

const MessageInput = () => {
  return (
    <div className='px-4 my-3'>
        <div className="w-full relative">
            <input
            className='border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white'
            type="text"
            placeholder='Send a message...'
            />
            <button className='absolute inset-y-0 end-0 flex items-center pe-3'>
                <FaPaperPlane />
            </button>
        </div>

    </div>
  )
}

export default MessageInput