import axios from 'axios'
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { Link } from 'react-router-dom'
import { useAuthContext } from '../context/AuthContext'

const Login = () => {
  const [loading, setLoading] = useState(false)
  const {setAuthUser} = useAuthContext()
  const [inputs, setInputs] = useState({
    username: '',
    password: ''
  })

  const handleEnterKeyDown = async (event) => {
    if (event.key === "Enter")
    {
      handleLogin()
    }
  }

  const handleLogin = async() => {
    setLoading(true)
    try {
      if( !inputs.username || !inputs.password ){
        toast.error('All fields are required')
        return
      }
      const res = await axios.post('/api/auth/login', inputs, {withCredentials: true})

      localStorage.setItem("chat-user", JSON.stringify(res.data));
      setAuthUser(res.data)

      toast.success("Login Successful")
    } catch (error) {
      toast.error(error.response.data.error)
    } finally {
      setLoading(false)
    }
  }
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Login <span className='text-blue-400'>Chat App</span>
        </h1>

        <div>
          <label className='label p-2'>
            <span className='text-base label-text'>Username:</span>
          </label>
          <input type="text" placeholder='Enter Username' className='input input-bordered w-full h-10' onChange={(e) => setInputs({...inputs, username: e.target.value})} />
        </div>

        <div>
          <label className='label p-2'>
            <span className='text-base label-text'>Password:</span>
          </label>
          <input type="password" placeholder='Enter Password' className='input input-bordered w-full h-10' onChange={(e) => setInputs({...inputs, password: e.target.value})} onKeyDown={handleEnterKeyDown} />
        </div>
        
        <Link to={"/signup"} className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>
          {"Don't"} have an account?
        </Link>

        <div>
          <button className='btn btn-block btn-sm mt-2' onClick={handleLogin} disabled={loading}>
            {loading ? <span className='loading loading-spinner' /> : "Login"}
          </button>
        </div>

      </div>
    </div>
  )
}

export default Login