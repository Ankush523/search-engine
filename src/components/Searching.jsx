import { Mic } from '@mui/icons-material'
import React from 'react'
import { Search } from '@mui/icons-material'
import "./Search.css"
const Searching = () => {
  return (
    <div className='search'>
        <div className='flex items-center border-[1px] h-[50px] px-[10px] py-[20px] rounded-full w-[800px] mt-[40px] max-w-2xl'>
          <Search className="search_inputIcon"/>
          <input className='flex-1 px-[10px] py-[10px] border-none focus:outline-0'/>
          <Mic/>
        </div>
    </div>
  )
}

export default Searching