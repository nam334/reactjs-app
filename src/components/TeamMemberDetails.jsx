import {useParams} from 'react-router-dom'
import { useEffect, useState } from 'react'

import Card from './Card'
const TeamMemberDetails = () => {
     const {id} = useParams()
     const [teamInfo, setTeamInfo] = useState([])
    useEffect(()=>{
         fetchTeamMemberData(id)
    },[])
    async function fetchTeamMemberData(id){
       const data =  await fetch(`https://api.github.com/users/${id}`)
       const json = await data.json();
       setTeamInfo(json)
    }
  return (
   <>
   <Card data={teamInfo}/>
   </>
  )
}

export default TeamMemberDetails