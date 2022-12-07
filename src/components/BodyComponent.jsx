import { useState , useEffect} from 'react'
import CardComponent from './CardComponent'
import SearchBar from './SearchBar'
import {Link} from 'react-router-dom'
const BodyComponent = () => {
  
   const [searchData, setsearchData] = useState()
   //teamData consists of github ids of team members
   const teamData = ['nam334','BhaveshSSingh','gk9848970']
   //using foreach to loop over teamData
   useEffect(()=>{
    teamData.forEach((x, i) => { 
      fetchTeamData(x)
    });  
   },[])
   const arr = []
   


   async function fetchTeamData(teamMemberId){
      const data =  await fetch(`https://api.github.com/users/${teamMemberId}`)
      const json = await data.json()  
      arr.push(json)
      setsearchData([...arr])
     } 
  
  return (  
    <>
    <SearchBar setsearchData={setsearchData} searchData={searchData}/>
    <div className='card-container'>
   {
    searchData?.map((items,index)=>{ return(
         <Link to={`/team/${items?.login}`}>
         <CardComponent items={items} />
         </Link>
         
    )
      
    }) 
   }
    </div>
    </>
   
  )
} 

export default BodyComponent