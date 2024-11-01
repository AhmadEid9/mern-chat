import React, { useState } from 'react'
import SideBar from '../components/SideBar'
import MessagesContainer from '../components/messages/MessagesContainer'
import NoChatSelected from '../components/messages/NoChatSelected'
import useConversation from '../zustand/useConversation'

const Home = () => {
  const {selectedConversation} = useConversation()
  return (
    <div className='flex sm:h-[450px] md:h-[550px] p-4 gap-4 rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
        <SideBar />
        { selectedConversation ?  <MessagesContainer /> : <NoChatSelected/> }
    </div>
  )
}

export default Home