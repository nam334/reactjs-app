import {useParams} from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addItem } from './cartSlice'
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
    const dispatch = useDispatch()
//     const addItemToCart = () => {
//                dispatch(addItem({
//                     name:'kabaab'
//                }))
//     }
  return (
   <>
   <Card data={teamInfo}/>
   {/* <button onClick={addItemToCart}>Add to cart</button> */}
   </>
  )
}

export default TeamMemberDetails