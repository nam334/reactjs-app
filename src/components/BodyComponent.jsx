import React, { useState } from 'react'
import CardComponent from './CardComponent'
import data from '../data.json'
import SearchBar from './SearchBar'
const BodyComponent = () => {
   const [searchData, setsearchData] = useState(data)
      
  return (
    <>
    <SearchBar setsearchData={setsearchData}/>
    <div className='card-container'>
    {
      searchData.map((items,index)=>{return <CardComponent items={items}/>})
    }
    </div>
    </>
   
  )
}

export default BodyComponent