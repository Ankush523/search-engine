import { Mic } from '@mui/icons-material'
import React from 'react'
import { Search } from '@mui/icons-material'
import "./Search.css"
const Searching = () => {
  return (
    <div className='search'>
        <div className='search_input'>
          <Search className="search_inputIcon"/>
          <input/>
          <Mic/>
        </div>
    </div>
  )
}

export default Searching