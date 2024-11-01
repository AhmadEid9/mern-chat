import React from 'react'
import Message from './Message'
import useConversation from '../../zustand/useConversation'
import useGetMessages from '../../hooks/useGetMessages'
import MessageSkeleton from './MessagesSkeleton'
import NoMessage from './NoMessage'

const MessagesList = () => {
  const {messages, loading} = useGetMessages()
  return (
    <div className='p-4 flex-1 overflow-auto'>
      {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}
      {!loading && messages.length > 0 && messages.map((message) => <Message key={message._id} message={message}/>)}
      {!loading && messages.length === 0 && <NoMessage />}
    </div>
  )
}

export default MessagesList