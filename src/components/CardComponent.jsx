const CardComponent = (props) => {
  console.log('hi')
    return(
      
    <div className="card">
      <img src={props.items.img} width="200" height="200" alt="profilepic"/>
      <h6>{props.items.name}</h6>
      <h6>{props.items.company}</h6>
      <h6>{props.items.college}</h6>
      <h6>{props.items.location}</h6>
    </div>
    )
  }

  export default CardComponent