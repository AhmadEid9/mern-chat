import React from 'react'
import Messages from './MessagesList'
import MessageInput from './MessageInput'

const MessagesContainer = () => {
  return (
    <div className='md:min-w-[450px] flex flex-col'>
      <>
        <div className="bg-slate-500 px-4 py-2 mb-2">
          <span className='label-text'>To:</span>
          <span className='text-gray-900 font-bold'>User Name</span>
        </div>

        <Messages />

        <MessageInput />
      </>
    </div>
  )
}

export default MessagesContainer