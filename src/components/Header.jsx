import UserContext from '../context/UserContext'
import { heading } from '../utils/constants'
import userImage from '../images/user.png'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

import { Link } from 'react-router-dom'
import { removeuser } from './userSlice'
const Header = () => {
  const userItems = useSelector((store)=> store.user.value)
  const dispatch = useDispatch()
  const logout = () => {
             dispatch(removeuser()) 
  }
  return (
    <>
    <nav className = "bg-blue-200">
  <div className = "mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    <div className = "relative flex h-16 items-center justify-between">
      <div className = "absolute inset-y-0 left-0 flex items-center sm:hidden">
        {/* Mobile menu button*/}
        <button type="button" className = "inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
          <span className = "sr-only">Open main menu</span>
         
        
          <svg className = "block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
         
          <svg className = "hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div className = "flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
        <div className = "flex flex-shrink-0 items-center">
         
          <span className = " font-mono block h-8 w-auto lg:hidden">ECMASCRIPTERS</span>
          <span className = "font-mono font-bold text-lg block h-8 w-auto lg:block">ECMASCRIPTERS</span>
        </div>
        <div className = "hidden sm:ml-6 sm:block">
          <div className = "flex space-x-4">
            {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-300 hover:text-white" */}
            <Link to = "/" className = "text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page"/>Search 

            <Link to = "/" className = "text-gray-300 hover:bg-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"/>Login

            <Link to = "/" className = "text-gray-300 hover:bg-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"/>About

          </div>
        </div>
      </div>
      <div className = "absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
        <span>Hello {userItems.length > 0 ? userItems[0].name : "User"}</span>
       

      
        <div className = "relative ml-3">
          <div>
           
              <img className = "h-8 w-8 rounded-full" 
              src={userItems.length > 0 ? userItems[0].photo : userImage} alt=""/>
               
            {/* </button> */}
          
          </div>
        
         
        </div>
        <div className = "relative ml-3">
        <button className=' bg-gray-300 rounded text-sm p-2' onClick={logout}>Logout</button>
        </div>
      </div>
    </div>
  </div>

  {/* Mobile menu, show/hide based on menu state. */}
  <div className = "sm:hidden" id="mobile-menu">
    <div className = "space-y-1 px-2 pt-2 pb-3">
      {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-300 hover:text-white" */}
      <Link to = "/" className = "text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page" />Search

      <Link to = "/" className = "text-gray-300 hover:bg-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium" />Login

      <Link to = "/" className = "text-gray-300 hover:bg-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium" />About

    </div>
  </div>
</nav>
    </>
   
  ) 
} 

export default Header