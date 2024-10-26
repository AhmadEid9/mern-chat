import React from 'react'
import { FaSignOutAlt } from 'react-icons/fa'


const LogoutButton = () => {
  return (
    <div className='mt-auto'>
      <FaSignOutAlt className='w-6 h-6 text-white hover:text-red-500 cursor-pointer'/>
    </div>
  )
}

export default LogoutButton