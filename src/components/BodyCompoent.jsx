import React from 'react'
import CardComponent from './CardComponent'
const BodyCompoent = () => {
    const data = [
        {
          img:"" ,
          name:"Namrata Das",
          company:"Persistent Systems Limited",
          location:"Assam",
        
        },
        {
          img:"" ,
          name:"Pranav Sonawnane",
          company:"Onsite electro services pvt Ltd ",
          location:"Maharashtra",
        
        },
        {
          img:"" ,
          name:"Atul",
          company:"Nagarro Software Pvt. Ltd.",
          location:"Haryana",
        
        },
        {
          img:"" ,
          name:"Gaurav K",
          company:"",
          college:"IIT Kanpur",
          location:"Gadarpur",
        
        },
        {
          img:"" ,
          name:"Bhavesh Singh",
          company:"",
          college:"Lokmanya Tilak clg of engineering ",
          location:"Parel",
        },
        {
          img:"" ,
          name:"Rohan Patil",
          company:"TCS",
          location:"Nippani",
        
        
        },
        {
          img:"" ,
          name:"Firdos",
          company:"Delloite",
          location:"Madanapalle",
        
        
        },
        {
          img:"" ,
          name:"Dhruv Chaurasia",
          company:"Saharanpur",
          location:"Athenahealth",
        
        
        },
        {
          img:"" ,
          name:"Komal",
          company:"Coforge",
          location:"Bangalore",
        
        
        },
        {
          img:"" ,
          name:"Suyash Pradhan",
          company:"Bureau, Inc",
          location:"Maharashtra",
        
        
        }
      ]
      
  return (
    <div className='card-container'>
   {
    data.map((items,index)=>{return <CardComponent items={items}/>})
   }
  {/* <CardComponent data={data[0]} />
  <CardComponent data={data[1]}/>
  <CardComponent data={data[2]}/> */}
  </div>
  )
}

export default BodyCompoent