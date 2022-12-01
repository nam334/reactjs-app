import React from 'react'
import { useState } from 'react'
import data from '../data.json'
const SearchBar = ({setsearchData}) => {
  const [searchText, setSearchText] = useState('')
  //console.log(useState())
  const searchHandler = (searchText) => {
   return data.filter((result)=> result.name.toLowerCase().includes(searchText) || result.company.toLowerCase().includes(searchText))
  }
  const submitHandler = (e) => {
    e.preventDefault() 
    setsearchData(searchHandler(searchText))
  }
  return (
    <div className='search'>
        <form onSubmit={submitHandler}>
            <input placeholder="Enter name or company..." 
            value={searchText}
            onChange={(e)=>setSearchText(e.target.value)}
            />
            <button>Submit</button>
        </form>
    </div>
  )
}

export default SearchBar