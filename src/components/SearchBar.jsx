import { useState } from 'react'

import stateData from '../utils/statedata.json'
import useCities from './customhooks/useCities'

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
    const filteredResults = searchHandler(searchText)
    setsearchData(filteredResults)
  }
  return (
    <>
     <div className='search'>
        <form onSubmit={submitHandler}>
            <input placeholder="Enter name ..." 
            value={searchText}
            onChange={(e)=>setSearchText(e.target.value)}
            />

        {/* dropdown for state name */}
         <select value={stateName} 
         onChange={e => setStateName(e.target.value)}
         >
          {
            Object.keys(stateData).map((stateName)=>(
              <option key={stateName} value={stateName}>{stateName}</option>
            ))
          }
          </select>   
           {/* dropdown for city name */}
         <select value={cityName} 
         onChange={e => setCityName(e.target.value)}
         >
          {
            cityList.map((cityName)=>(
              <option key={cityName} value={cityName}>{cityName}</option>
            ))
          }
          </select>   
            <button>Submit</button>
        </form>
    </div>
    </>
   
  )
}

export default SearchBar