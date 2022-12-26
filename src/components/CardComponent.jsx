import { useContext } from 'react'

import ThemeContext from '../context/ThemeContext'
import Card from './Card'
const CardComponent = ({searchData}) => {

  const {theme, setTheme} = useContext(ThemeContext)
  
  if(!searchData) return null

    return( 
     <>
     <button className='text-gray-500 font-serif font-normal mx-4 mt-4' onClick={()=>setTheme(theme === 'dark' ? 'light' :'dark')}>Change theme: {theme}</button>
     <div className="container my-12 mx-auto px-4 md:px-12">
    <div className="flex flex-wrap -mx-1 lg:-mx-4" style={{
        backgroundColor: theme === 'dark' ? "#000" : "#fff"
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
