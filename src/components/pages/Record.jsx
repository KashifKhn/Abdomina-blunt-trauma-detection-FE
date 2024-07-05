import React from 'react'
import './Record.css'
import { ResultTable } from './ResultTable'

export const Record = () => {
  
  return (
    <div>
      <div>
      <input className='searchbar' type='search' placeholder='Ptaient ID'/>
      <button className='btn3'>Serach</button>
      </div>
    <ResultTable/>
    </div>
  )
}


      