import { Link } from "react-router-dom"

const Card = ({data}) => {
  if(!data) return null
  
  return (
    <>
    <Link to={`/team/${data.login}`}> 
    <div className="card-container">
     <div className="card" key={data.id}>
      <img src={data.avatar_url} width="200" height="200" alt="profilepic"/>
      <h6>{data.name}</h6>
      <h6>{data.location}</h6>
      <h6>{data.blog}</h6>    
      <h6>{data.twitter_username}</h6>
    </div> 
    </div> 
    </Link>
    </>
  )
}

export default Card 