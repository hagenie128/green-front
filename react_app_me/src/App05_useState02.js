import React, { useState } from 'react'
import Count from './Components/Count'
import './Components/css/App05.css'

export default function App05_useState02() {
    const [totalCount,setTotalCount]=useState(0)
    const addTotalCount=()=>{
        setTotalCount((prev)=>prev+1)
    }
    const removeTotalCount=()=>{
        setTotalCount((prev)=>prev-1)
    }
  return (
    <>
    <Count onAdd={addTotalCount} onRemove={removeTotalCount}/>
    <Count onAdd={addTotalCount} onRemove={removeTotalCount}/>
    <div className='total_wrap'>
        <div className='total'>sum : </div>
        <div className='totalResult'>{totalCount}</div>
    </div>
    </>
  )
}
