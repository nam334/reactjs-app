import { useState } from 'react'

import stateData from '../utils/statedata.json'
import useCities from './customhooks/useCities'
import ThemeContext from '../context/ThemeContext';
import { useEffect } from 'react';

const SearchBar = ({setsearchData,searchData, searchText, setSearchText, cityName, setCityName}) => {
  console.log(searchData)
  // const [searchText, setSearchText] = useState('')
  const [stateName, setStateName] =  useState('Arunachal Pradesh')
  // const [cityName, setCityName] =  useState('')
  const cityList = useCities(stateName)
  const searchHandler = (searchText) => 
  { 
    return searchData?.filter((res,i)=> res.name.toLowerCase().includes(searchText.toLowerCase())

    )
  }
 
  const submitHandler = (e) => {
    e.preventDefault() 
    console.log(searchText)
    console.log(searchHandler(searchText))
    const filteredResults = searchText && searchHandler(searchText)
    setsearchData(filteredResults)
  }
 
  const locationHandler = (e)=> { 
    e.preventDefault()
    console.log(cityName)
    const city =  searchData.filter((res,i)=> res.location.toLowerCase().includes(cityName.toLowerCase()))
    setsearchData(city)
  }
  return (
    <>
   

     <div className='search'>
        <form onSubmit={submitHandler}>
            <input placeholder="Enter name ..." 
            className="relative flex-auto w-2/6 mt-4 mx-4
            px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding 
            border border-solid border-gray-300 rounded transition ease-in-out m-0 
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" 
           
            value={searchText}
            onChange={(e)=>setSearchText(e.target.value)}
            />

          <button className="btn inline-block px-6 py-2 border-2 border-blue-200 text-blue-400
          font-medium text-xs 
          leading-tight uppercase rounded mx-2
          hover:bg-blue-200 hover:bg-opacity-2 focus:outline-none focus:ring-0 
          transition duration-150 ease-in-out" 
          id="button-addon3">Search by name</button>
        </form>
        <form onSubmit={locationHandler} className='flex my-3 mx-3'>
        <select value={stateName} 
         onChange={e => setStateName(e.target.value)}
         className="form-select appearance-none
         w-1/6
         px-3
         py-1.5
         text-base
         font-normal
         text-gray-400
         bg-white bg-clip-padding bg-no-repeat
         border border-solid border-gray-300
         rounded
         transition
         ease-in-out
         mx-2
         m-0
         focus:text-gray-400 focus:bg-white focus:border-blue-600 focus:outline-none"
         >
          {
            Object.keys(stateData).map((stateName)=>(
              <option key={stateName} value={stateName}>{stateName}</option>
            ))
          }
          </select>   
          
         <select value={cityName} 
         className="form-select appearance-none
         w-1/6
         px-3
         py-1.5
         text-base
         font-normal
         text-gray-400
         bg-white bg-clip-padding bg-no-repeat
         border border-solid border-gray-300
         rounded
         transition
         ease-in-out
         m-0
         focus:text-gray-400 focus:bg-white focus:border-blue-600 focus:outline-none first-letter:"
         onChange={e => setCityName(e.target.value)}
         >
          {
            cityList.map((cityName)=>(
              <option key={cityName} value={cityName} className='font-normal
              text-gray-700'>{cityName}</option>
            ))
          }
          </select>   
          <button className='btn  px-6 py-2 border-2 border-blue-200 text-blue-400
          font-medium text-xs 
          leading-tight uppercase rounded mx-2
          hover:bg-blue-200 hover:bg-opacity-2 
          focus:outline-none focus:ring-0 transition 
          duration-150 ease-in-out" '>Search by location</button>
        </form>
    </div>
    </>
   
  )
}

export default SearchBar