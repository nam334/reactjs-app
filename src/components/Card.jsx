

const Card = ({item}) => {
  return (
    <div>
         <div className="card-container">
     <div className="card">
      <img src={item.avatar_url} width="200" height="200" alt="profilepic"/>
      <h6>{item.name}</h6>
      <h6>{item.location}</h6>
      <h6>{item.blog}</h6>    
      <h6>{item.twitter_username}</h6>
    </div> 
    </div> 
    </div>
  )
}

export default Card 