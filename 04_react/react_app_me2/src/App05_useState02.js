import React, { useState } from 'react'
import Count from './Components/Count'
import './Components/css/Count.css'

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
        <div className='count_wrap'>
            <div className='remove'>sum: </div>
            <p>{totalCount}</p>
        </div>
    </>

  )
}
