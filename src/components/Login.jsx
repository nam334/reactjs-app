import React,{useState} from 'react'
import { useDispatch } from 'react-redux'

import { adduser } from './userSlice'

const Login = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [photo, setPhoto] = useState('')
    const dispatch = useDispatch()

    const submitHandler = (e) => {
        e.preventDefault()
        console.log(name, email, photo)
        dispatch(adduser({
            name: name,
            email:email,
            photo:photo
        }))
        setName('')
        setEmail('')
        setPhoto('')
    }
  return (
    <>
    <div className="w-full ">
    <div className = "md:flex md:justify-center mb-6 mt-4">
    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mt-6" onSubmit={submitHandler}>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
        Username
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight 
      focus:outline-none focus:shadow-outline" id="username" type="text" onChange={(e)=>setName(e.target.value)}
      placeholder="Username"/>
    </div>
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
        Email
      </label>
      <input className="shadow appearance-none border border-red-500 rounded w-full 
      py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
      id="email" type="email" onChange={(e)=>setEmail(e.target.value)} placeholder="Enter email..."/>
    </div>
    <div className="mb-8">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="file">
        Upload image
      </label>
      <input className="shadow appearance-none border border-red-500 rounded w-full 
      py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
      id="file" type="file"  onChange={(e)=> setPhoto(e.target.value)}/>
    </div>
    <div className="flex items-center justify-between">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded 
      focus:outline-none focus:shadow-outline" >
       Login
      </button>
     
    </div>
  </form>
    </div>
  
</div>
    </>
  )
}

export default Login