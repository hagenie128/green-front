
/*

작업개요 

- Count01 컴포넌트 복사해서 제작 
- App04_useState02.js 파일에서 컴포넌트를 사용할때 총 합계를 연산하는 함수를 Props 값으로 전달 
- 컴포넌트내 버튼 이벤트를 통해 Props로 전달받은 onAdd, onRemove 속성값을 실행하여 App04_useState02.js 파일의 총 합계 변경하는 useState() 상태변경 함수 실행

*/

import React, { useState } from 'react' // useState() 적용 ( React Hook )
import './css/Count.css'

export default function Count({onAdd, onRemove}) { // 전달받을 onAdd, onRemove Props 설정 

  //let count=0  // 일반 변수로 지정하면 JSX 구조내의 변수는 바뀌지 않는다. 

  const [count, setCount] = useState(0)  // useState(초기값) 사용하여 count 변수값을 변경 

  const addCount=()=>{

    //alert("+버튼이 클릭되었습니다.") 

    //count++   // 일반함수로 count 값 변경되지 않음 

    setCount((prev)=>prev+1)  // count 값을 setCount() 함수를 사용하여 1씩 더한값으로 변경  주의) setCount(count++) 안됨 - () 안에는 값만 지정할 수 있슴
    onAdd() // props로 전달받은 onAdd 속성값을 실행하여 App04_useState02.js 파일의 총합계를 1씩 더하는 함수 ( addTotalCount ) 를 실행   
    /*
    중요

    setCount(count+1)
    setCount(count+1)
    setCount(count+1)
    setCount(count+1)
    setCount(count+1)

    여러번 실행 시켜도 count값이 같기 때문에 결과값은 똑같이 1

    setCount((prev)=>{
      return prev+1
    })

    > 줄임 

    setCount((prev)=> prev+1)   
    setCount((prev)=> prev+1)
    setCount((prev)=> prev+1)
    setCount((prev)=> prev+1)
    setCount((prev)=> prev+1)
    

    콜백함수를 사용하여 여러번 적용하면 누적된 결과값 적용 ( 이전 count 값을 받아서 다시 + 1 하기 때문 )

    */

  }

  const removeCount=()=>{
    if(count>0){  // count 값이 0 보다 클때만 실행 (count값이 0보다 작아지는것을 방지)
        setCount((prev)=>prev-1) // count 값을 setCount() 함수를 사용하여 1씩 뺀값으로 변경
        onRemove()   // props로 전달받은 onRemove 속성값을 실행하여 App04_useState02.js 파일 총합계를 1씩 빼주는 함수 ( removeTotalCount ) 를 실행   
    }
  }

  return (
    <div className="count_wrap">
        <div className="remove">
            {/*React에서는 주로 인라인 이벤트를 활용함 - doucment.querySelector(), addEventListener() 많이 사용하지 않음 */}
            <button className="remove_btn" onClick={removeCount}>-</button> {/*onClick 이벤트 적용하여 함수호출*/}
            {/*onClick={addBtnClick()} 가로주의 - 가로를 넣으면 함수를 실행하여 결과값을 다시 onClick이벤트값에 대입됨 - 함수와 연결만 되도록 () 생략 */}
        </div>
        <div className="count">
           {count}
        </div>
        <div className="add">
            <button className="add_btn" onClick={addCount}>+</button> {/*onClick 이벤트 적용하여 함수호출*/}
        </div>
    </div>
  )
}
