import React, { useState } from 'react'
import GenderCheckbox from '../components/GenderCheckbox'
import { Link } from 'react-router-dom'
import axios from 'axios'
import toast from 'react-hot-toast'
import { useAuthContext } from '../context/AuthContext'

const Signup = () => {
    const [loading, setLoading] = useState(false)
    const {authUser, setAuthUser} = useAuthContext()
    const [inputs, setInputs] = useState({
        fullname: '',
        username: '',
        password: '',
        confirmPassword: '',
        gender: '',
    })

    const handleEnterKeyDown = async (event) => {    
        if (event.key === "Enter")
        {
            handleSignup()
        }
      }

    const handleCheckboxChange = (gender) => {
        setInputs({...inputs, gender})
    }
    const handleSignup = async() => {
        setLoading(true)
        try {
            if( !inputs.fullname || !inputs.username || !inputs.password || !inputs.confirmPassword || !inputs.gender ){
                toast.error('All fields are required')
                return
            }

            if(inputs.password !== inputs.confirmPassword){
                toast.error('Passwords do not match')
                return
            }

            if(inputs.password.length < 6){
                toast.error('Password must be at least 6 characters')
                return
            }



            const res = await axios.post('/api/auth/register', inputs)

            if(res.error){
                throw new Error(res.error);
            }

            localStorage.setItem('chat-user', res.data)
            setAuthUser(res.data)

            
            toast.success('Signup successful')
            
            
        } catch (error) {
            console.error(error);
            
            toast.error(error.response.data.error)
        } finally {
            setLoading(false)
        }
    }
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
        <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
            <h1 className="text-3xl font-semibold text-center text-gray-300">
                Signup <span className='text-blue-400'>Chat App</span>
            </h1>

            <div>
                <label className='label p-2'>
                    <span className='text-base label-text'>Fullname:</span>
                </label>
                <input type="text" placeholder='Enter Fullname' className='input input-bordered w-full h-10' value={inputs.fullname} onChange={(e) => setInputs({ ...inputs, fullname: e.target.value })}/>
            </div>

            <div>
                <label className='label p-2'>
                    <span className='text-base label-text'>Username:</span>
                </label>
                <input type="text" placeholder='Enter Username' className='input input-bordered w-full h-10' value={inputs.username} onChange={(e) => setInputs({ ...inputs, username: e.target.value })}/>
            </div>

            <div>
                <label className='label p-2'>
                    <span className='text-base label-text'>Password:</span>
                </label>
                <input type="password" placeholder='Enter Password' className='input input-bordered w-full h-10' value={inputs.password} onChange={(e) => setInputs({ ...inputs, password: e.target.value })} onKeyDown={handleEnterKeyDown} />
            </div>

            <div>
                <label className='label p-2'>
                    <span className='text-base label-text'>Confirm Password:</span>
                </label>
                <input type="password" placeholder='Confirm Password' className='input input-bordered w-full h-10' value={inputs.confirmPassword} onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })} onKeyDown={handleEnterKeyDown} />
            </div>

            <GenderCheckbox selectedGender={inputs.gender} onCheckboxChange={handleCheckboxChange}/>

            <Link to={"/login"} className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>
                {"Already"} have an account?
            </Link>

            <div>
                <button className='btn btn-block btn-sm mt-2' onClick={handleSignup} disabled={loading}>
                    {loading ? <span className='loading loading-spinner'/> :'Sign Up'}
                </button>
        </div>


        </div>
    </div>
  )
}

export default Signup