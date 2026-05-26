import React, { useState } from 'react'
import './css/Count.css'

export default function Count({onAdd,onRemove}) {
    const [count,setCount]=useState(0)
    const addCount=()=>{
        setCount((prev)=>prev+1)
        onAdd()
    }
    const removeCount=()=>{
        if(count>0){
            setCount((prev)=>prev-1)
            onRemove()
        }
    }
  return (
    <div className='count_wrap'>
        <div className='remove'>
            <button className='remove_btn' onClick={removeCount}>-</button>
        </div>
        <div className='count'>{count}</div>
        <div className='add'>
            <button className='add_btn' onClick={addCount}>+</button>
        </div>
    </div>
  )
}
