import axios from 'axios'
import React from 'react'
import toast from 'react-hot-toast'
import { FaSignOutAlt } from 'react-icons/fa'
import { useAuthContext } from '../context/AuthContext'
import useLogout from '../hooks/useLogout'


const LogoutButton = () => {
  const {loading, handleLogout} = useLogout()
  return (
    <div className='mt-auto'>
      {!loading ? 
      (<FaSignOutAlt className='w-6 h-6 text-white hover:text-red-500 cursor-pointer' onClick={handleLogout}/>) 
      :
      <span className='loading loading-spinner'/>
    }
    </div>
  )
}

export default LogoutButton