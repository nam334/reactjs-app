import { useContext } from 'react'
import ThemeContext from '../context/ThemeContext'
import Card from './Card'
const CardComponent = ({searchData}) => {

  const {theme, setTheme} = useContext(ThemeContext)
  
  if(!searchData) return null
  return( 
     <>
    
  <div className="flex flex-start mx-4 font-thin text-gray-400 text-sm"> Switch to dark theme?
  <div className="form-check form-switch px-2">
   
    <input className="form-check-input appearance-none w-9 -ml-10 mx-1
    rounded-full float-left h-5 align-top bg-gray-300 bg-no-repeat bg-contain
     bg-gray-300 focus:outline-none cursor-pointer shadow-sm" 
     type="checkbox" role="switch" id="flexSwitchCheckDefault" 
     onClick={()=>setTheme(theme === 'dark' ? 'light' :'dark')}
     />
  </div>
 </div>
     <div className="container my-12 mx-auto px-4 md:px-12">
     <div className="flex flex-wrap -mx-1 lg:-mx-4" style={{
        backgroundColor: theme === 'dark' ? "#003366" : "#fff"
      }}>
    {
      searchData.map(data  => <Card  data ={data}/>)
    }
  </div>
  </div>


    
     </>
    )
  }

  export default CardComponent 
