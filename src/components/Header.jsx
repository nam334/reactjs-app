import UserContext from '../context/UserContext'
import { heading } from '../utils/constants'

const Header = () => {
  return (
    <>
     <div className='navbar'>
      <h6>{heading}</h6>
    </div>
    {/* <UserContext.Consumer>
      {({email, setEmail})=> {
        return(
          <>
          <span>{email}</span>
          <button onClick={()=>{ setEmail("dummy@gmail.com")}}>Click here</button>
          </>
        )
      }}
    </UserContext.Consumer> */}
    </>
   
  ) 
} 

export default Header