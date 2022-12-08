import { useState } from 'react'
const SearchBar = ({setsearchData,searchData}) => {
  const [searchText, setSearchText] = useState('')
  const searchHandler = (searchText) => 
  { 
    return searchData.filter((res,i)=> res.name.toLowerCase().includes(searchText) 
    )
  }
  const submitHandler = (e) => {
    e.preventDefault() 
    setsearchData(searchHandler(searchText))
  }
  return (
    <>
     <div className='search'>
        <form onSubmit={submitHandler}>
            <input placeholder="Enter name ..." 
            value={searchText}
            onChange={(e)=>setSearchText(e.target.value)}
            />
            <button>Submit</button>
        </form>
    </div>
    </>
   
  )
}

export default SearchBar