import { useState , useEffect} from 'react'
import CardComponent from './CardComponent'
import SearchBar from './SearchBar'
import {Link} from 'react-router-dom'
const BodyComponent = () => {
   const [searchData, setsearchData] = useState([])
   useEffect(()=>{
    fetchTeamData()
   },[])
   async function fetchTeamData(){
      const teamData = ['nam334','BhaveshSSingh','gk9848970']
      const arr = []
      teamData.map(async (teamMemberId,i)=>{
        const data =  await fetch(`https://api.github.com/users/${teamMemberId}`)
        const json = await data.json()  
        arr.push(json)
      })
      setsearchData(arr)
     }  
 
  return (  
    <>
    <SearchBar setsearchData={setsearchData} searchData={searchData}/>
    {
      searchData.map(items => (
        <>
         <Link to={`/team/${items?.login}`}> 
         <CardComponent items={items} />
        </Link>     
        </>
      ))
    }
    </>
  )} 
export default BodyComponent