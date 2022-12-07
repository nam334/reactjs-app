const CardComponent = ({items}) => {
 
  //  for (const property in items) {
  //   console.log(`${property}: ${object[property]}`);
  // }
    if(!items) return null
    return( 
    <>
    {/* {
      items.map((item,index)=> {
       return <>
      <div className="card">
      <img src={item.avatar_url} width="200" height="200" alt="profilepic"/>
      <h6>{item.name}</h6>
      <h6>{item.location}</h6>
      <h6>{item.blog}</h6>
      <h6>{item.twitter_username}</h6>
    </div> 
        </>
      })
    } */}
     <div className="card">
      <img src={items.avatar_url} width="200" height="200" alt="profilepic"/>
      <h6>{items.name}</h6>
      <h6>{items.location}</h6>
      <h6>{items.blog}</h6>
      <h6>{items.twitter_username}</h6>
    </div> 
    </>
   
    )
  }

  export default CardComponent 