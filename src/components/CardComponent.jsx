import { useContext } from 'react'

import ThemeContext from '../context/ThemeContext'
import Card from './Card'
const CardComponent = ({searchData}) => {

  const {theme, setTheme} = useContext(ThemeContext)
  
  if(!searchData) return null

    return( 
     <>
     <button onClick={()=>setTheme(theme === 'dark' ? 'light' :'dark')}>Change theme: {theme}</button>
      <div className="card-container" style={{
        backgroundColor: theme === 'dark' ? "#000" : "#fff"
      }}>
    {
      searchData.map(data  => <Card  data ={data}/>)
    }
    </div>
     </>
    )
  }

  export default CardComponent 
