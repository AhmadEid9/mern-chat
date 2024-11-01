import React, { useEffect, useRef } from 'react'
import Message from './Message'
import useGetMessages from '../../hooks/useGetMessages'
import MessageSkeleton from './MessagesSkeleton'
import NoMessage from './NoMessage'

const MessagesList = () => {
  const {messages, loading} = useGetMessages()
  const lastMessageRef = useRef()

  useEffect(() => {
    setTimeout(() => lastMessageRef.current?.scrollIntoView({behavior: 'smooth'}), 100)
  }, [messages])
  return (
    <div className='p-4 flex-1 overflow-auto'>
      {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}
      {!loading && messages.length > 0 && messages.map((message) => (
        <div key={message._id} ref={lastMessageRef}>
          <Message message={message}/>
        </div>
      ))}
      {!loading && messages.length === 0 && <NoMessage />}
    </div>
  )
}

export default MessagesList