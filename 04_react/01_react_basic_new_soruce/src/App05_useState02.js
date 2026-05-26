/*
작업개요 

- useState() 사용하여 총합계 변경하는 상태관리 적용 
- 총합계를 변경하는 함수를 컴포넌트 Props 값으로 전달 

*/


import React, { useState } from 'react' // useState() 적용 ( React Hook )
import Count02 from './Components/Count02' // Count02.js 컴포넌트 적용 
import './css/totalcount.css' // totalcount.css 스타일 적용 

export default function App05_useState02() {

  const [totalCount, setTotalCount] = useState(0) // useState() 사용하여 totalCount 변수값을 변경 

  const addTotalCount=()=>{ // totalCount 값을 1씩 더한값으로 변경 
    setTotalCount(totalCount+1)
  }

  const removeTotalCount=()=>{ // totalCount 값을 1씩 뺀값으로 변경  
    setTotalCount(totalCount-1) 
  }

  return (
    <>
        {/*addTotalCount, removeTotalCount 함수를 onAdd, onRemove  Props를 사용하여 Count02 컴포넌트안으로 전달 */}
        <Count02 onAdd={addTotalCount} onRemove={removeTotalCount}/> 
        <Count02 onAdd={addTotalCount} onRemove={removeTotalCount}/> 
        <div class="total_wrap">
            <span>sum : </span> {totalCount}  {/*총 합계값을 변수로 정의 */}
        </div>
    </>
  )
}
