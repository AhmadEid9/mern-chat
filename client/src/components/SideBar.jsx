import React from 'react'
import SearchInput from './SearchInput'
import ConversationsList from './ConversationsList'
import LogoutButton from './LogoutButton'

const SideBar = () => {
  return (
    <div className='border-r border-slate-900 p-4 flex flex-col'>
        <SearchInput />
        <div className="divider px-3"></div>
        <ConversationsList />
        <div className="divider px-3"></div>
        <LogoutButton />
    </div>
  )
}

export default SideBar