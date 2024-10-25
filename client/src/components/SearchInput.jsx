import React from 'react'
import { FaSearch } from 'react-icons/fa'

const SearchInput = () => {
  return (
    <div className='flex items-center gap-2'>
      <input type="text" placeholder='Search...' className='input input-bordered rounded-full' />
      <button className='btn btn-circle bg-sky-500 text-white'>
        <FaSearch />
      </button>
    </div>
  )
}

export default SearchInput