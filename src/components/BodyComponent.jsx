import { useState , useEffect, useContext} from 'react'

import CardComponent from './CardComponent'
import SearchBar from './SearchBar'
import { teamData } from '../utils/constants'


const BodyComponent = () => { 
   const [searchData, setsearchData] = useState([])
   useEffect(()=>{
    function fetchTeamData(){
        const data = teamData.map(async member => {
        const data = await fetch(`https://api.github.com/users/${member}`)
        const json = await data.json()  
        return json
      })
      return data
    }
    const res = fetchTeamData()
    Promise.all(res).then((values) => {
        setsearchData(values)
    });
   },[])
  return (  
    <>
    <SearchBar setsearchData={setsearchData} searchData={searchData}/>
    
    {
      searchData && <CardComponent searchData={searchData}/>
    }
    </>
  )} 
export default BodyComponent