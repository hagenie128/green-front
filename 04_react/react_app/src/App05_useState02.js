import React, { useState } from 'react'
import Count from './Components/Count'

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
    {/* props로 함수 관련 데이터를 주고받을 수 있음 */}
        <Count onAdd={addTotalCount} onRemove={removeTotalCount}/>
        <Count onAdd={addTotalCount} onRemove={removeTotalCount}/>
        {/* 함수만 여기서 만들고 실행 장소는 따로 지정 */}
        <div className='total_wrap'>
            <span>sum : </span>{totalCount}
        </div>
    </>
  )
}
