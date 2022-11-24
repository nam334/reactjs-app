import React from 'react'
import logo from '../images/images.png'
import user from '../images/user.png'
const Header = () => {
  return (
    <div className='navbar'>
     <img src={logo} alt="logo" width="50" height="50"/>
     <input type="text" placeholder="Search.." className='searchbar'/>
     <img src={user} alt="user" width="50" height="50"/>
    </div>
  )
}

export default Header