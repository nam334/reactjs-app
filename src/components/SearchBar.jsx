import { useState } from 'react'

import stateData from '../utils/statedata.json'
import useCities from './customhooks/useCities'
import ThemeContext from '../context/ThemeContext';

const SearchBar = ({setsearchData,searchData}) => {
  const [searchText, setSearchText] = useState('')
  const [stateName, setStateName] =  useState('Assam')
  const [cityName, setCityName] =  useState('')
  const cityList = useCities(stateName)
  const searchHandler = (searchText) => 
  { 
    return searchData?.filter((res,i)=> res.name.toLowerCase().includes(searchText.toLowerCase())

    )
  }
  const submitHandler = (e) => {
    e.preventDefault() 
    const filteredResults = searchText && searchHandler(searchText)
    setsearchData(filteredResults)
  }
  return (
    <>
   

     <div className='search'>
        <form onSubmit={submitHandler}>
            <input placeholder="Enter name ..." 
            // className="w-2/6 my-4 px-3 mx-2 py-1.5 text-base font-normal text-cyan-500 bg-white
            // border border-solid border-gray-300 rounded transition ease-in-out m-0 
            // focus:text-gray-500 focus:bg-white focus:border-blue-900 focus:outline-none" 
            
            className="relative flex-auto w-2/6 mt-4 mx-4
            px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding 
            border border-solid border-gray-300 rounded transition ease-in-out m-0 
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" 
           
            value={searchText}
            onChange={(e)=>setSearchText(e.target.value)}
            />

       
         {/* <select value={stateName} 
         onChange={e => setStateName(e.target.value)}
         >
          {
            Object.keys(stateData).map((stateName)=>(
              <option key={stateName} value={stateName}>{stateName}</option>
            ))
          }
          </select>   
          
         <select value={cityName} 
         onChange={e => setCityName(e.target.value)}
         >
          {
            cityList.map((cityName)=>(
              <option key={cityName} value={cityName}>{cityName}</option>
            ))
          }
          </select>    */}
          <button className="btn inline-block px-6 py-2 border-2 border-cyan-600 text-blue-600 font-medium text-xs 
          leading-tight uppercase rounded mx-2
          hover:bg-cyan-400 hover:bg-opacity-2 focus:outline-none focus:ring-0 transition duration-150 ease-in-out" 
          id="button-addon3">Search by name</button>
        </form>
    </div>
    </>
   
  )
}

export default SearchBar