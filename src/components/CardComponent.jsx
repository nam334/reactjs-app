const CardComponent = ({searchData}) => {
  if(!searchData) return null
 console.log({searchData})
    return( 
    <div className="card-container">
    {
      searchData.map(data  => (
    
      <div className="card" key={data.id}>
      <img src={data.avatar_url} width="200" height="200" alt="profilepic"/>
      <h6>{data.name}</h6>
      <h6>{data.location}</h6>
      <h6>{data.blog}</h6> 
      <h6>{data.twitter_username}</h6>
    </div> 
    
      ))
    }
    
    </div>
   
    )
  }

  export default CardComponent 
