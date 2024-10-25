import React from 'react'
import SearchInput from './SearchInput'
import Conversations from './ConversationsList'
import LogoutButton from './LogoutButton'

const SideBar = () => {
  return (
    <div>
        <SearchInput />
        <div className="divider px-3"></div>
        <Conversations />
        {/* <div className="divider px-3"></div>
        <LogoutButton /> */}
    </div>
  )
}

export default SideBar