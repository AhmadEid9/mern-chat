import React from 'react'
import SearchInput from './SearchInput'
import Conversations from './ConversationsList'
import LogoutButton from './LogoutButton'

const SideBar = () => {
  return (
    <div className='border-r border-slate-900 p-4 flex flex-col'>
        <SearchInput />
        <div className="divider px-3"></div>
        <Conversations />
        <LogoutButton />
    </div>
  )
}

export default SideBar