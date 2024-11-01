import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import useConversation from '../zustand/useConversation'
import useGetConversations from '../hooks/useGetConversations'
import toast from 'react-hot-toast'

const SearchInput = () => {
  const [search, setSearch] = useState('')
  const {setSelectedConversation} = useConversation()
  const {conversations} = useGetConversations()

  const handleSearch = () => {
    if(!search.trim()) return

    if(search.length < 3) return toast.error('Search term must be at least 3 characters')

    const query = conversations.find((c) => c.fullname.toLowerCase().includes(search.toLowerCase()))

    if (query) {
      setSelectedConversation(query)
      setSearch('')
    } else {
      toast.error('No such user found')
    }

  }

  return (
    <div className='flex items-center gap-2'>
      <input type="text" placeholder='Search...' className='input input-bordered rounded-full' value={search} onChange={(e) => setSearch(e.target.value)}  />
      <button className='btn btn-circle bg-sky-500 text-white' onClick={handleSearch}>
        <FaSearch />
      </button>
    </div>
  )
}

export default SearchInput