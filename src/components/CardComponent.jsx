const CardComponent = ({items}) => {
    return( 
    <>
     <div className="card-container">
     <div className="card">
      <img src={items.avatar_url} width="200" height="200" alt="profilepic"/>
      <h6>{items.name}</h6>
      <h6>{items.location}</h6>
      <h6>{items.blog}</h6>    
      <h6>{items.twitter_username}</h6>
    </div> 
    </div> 
    </>
   
    )
  }

  export default CardComponent 
 