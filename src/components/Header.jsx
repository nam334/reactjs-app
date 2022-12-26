import UserContext from '../context/UserContext'
import { heading } from '../utils/constants'
import userImage from '../images/user.png'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeuser } from './userSlice'
const Header = () => {
  //const cartItems = useSelector((store) => store.cart.value)
  const userItems = useSelector((store)=> store.user.value)
  // const count = cartItems.length
  const dispatch = useDispatch()
  const logout = () => {
             dispatch(removeuser())
  }
  return (
    <>
     {/* <div className='navbar'>
      <h6>{heading} </h6> */}
    {/* </div> */}
     

    <nav className = "bg-blue-200">
  <div className = "mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    <div className = "relative flex h-16 items-center justify-between">
      <div className = "absolute inset-y-0 left-0 flex items-center sm:hidden">
        {/* Mobile menu button*/}
        <button type="button" className = "inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
          <span className = "sr-only">Open main menu</span>
          {/*
            Icon when menu is closed.

            Heroicon name: outline/bars-3

            Menu open: "hidden", Menu closed: "block"
          */}
          <svg className = "block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
          {/*
            Icon when menu is open.

            Heroicon name: outline/x-mark

            Menu open: "block", Menu closed: "hidden"
          */}
          <svg className = "hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div className = "flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
        <div className = "flex flex-shrink-0 items-center">
          {/* <img className = "block h-8 w-auto lg:hidden"
           src="" alt="ECMASCRIPTERS"/>
          <img className = "hidden h-8 w-auto lg:block" 
          src="" alt="ECMASCRIPTERS"/> */}
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
        {/* <button type="button" className = "rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
          <span className = "sr-only">View notifications</span>
       
          <svg className = "h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
          </svg>
        </button> */}

        {/* Profile dropdown */}
        <div className = "relative ml-3">
          <div>
            {/* <button type="button" className = "flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
              <span className = "sr-only">Open user menu</span> */}
              <img className = "h-8 w-8 rounded-full" 
              src={userItems.length > 0 ? userItems[0].photo : userImage} alt=""/>
               
            {/* </button> */}
          
          </div>
        
          {/*
            Dropdown menu, show/hide based on menu state.

            Entering: "transition ease-out duration-100"
              From: "transform opacity-0 scale-95"
              To: "transform opacity-100 scale-100"
            Leaving: "transition ease-in duration-75"
              From: "transform opacity-100 scale-100"
              To: "transform opacity-0 scale-95"
          */}
          {/* <div className = "absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabIndex="-1">
            <Link to = "/" className = "block px-4 py-2 text-sm text-gray-300" role="menuitem" tabIndex="-1" id="user-menu-item-0" />Your Profile
            <Link to = "/" className = "block px-4 py-2 text-sm text-gray-300" role="menuitem" tabIndex="-1" id="user-menu-item-1" />Settings
            <Link to = "/" className = "block px-4 py-2 text-sm text-gray-300" role="menuitem" tabIndex="-1" id="user-menu-item-2" />Sign out
          </div> */}
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