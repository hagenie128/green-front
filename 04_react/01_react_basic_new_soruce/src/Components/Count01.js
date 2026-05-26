/*
useState()  ****** 중요 *******

- 컴포넌트의 기본특징은 한번 랜더링 되면 가상의 돔에 기억되어 같은 컴포넌트를 반복해서 사용되기 때문에  ( CSR - 클라이언트 사이드 랜더링 )
컴포넌트의 안에서 임의로 Html 구조 또는 데이터를 변경하더라도 변화가 없다. 따라서 React 에서 제공되는 useState() 훅을사용하여 데이터값을 변경하고 다시 리랜더링 시켜야된다.



작업개요 

-  + 버튼 - 버튼에 이벤트를 적용하여 특정 변수값을 1씩 증가, 1씩 감소 하는 Count 컴포넌트 제작 

- 일반 변수값으로 설정하면 이벤트가 발생해도 JSX 문법내의 변수값은 변경되지 않는다. (효율적인 랜더링 관리를 위함)

- useState() 함수를 사용하여 특정 변수의 상태값을 변경 

형식 

import React, { useState } from 'react'  - useState() 적용 

const [변수명, 변경할 함수] = useState(변수초기값)

변경할함수(변경할값)


주의) 상태값을 변경하는 함수를 반복 사용시 그 상태값은 누적되지 않음 - 이전 상태값을 콜백함수 형태로 변경해야 누적됨 

setCount(count+1)  반복해도 누적되지 않음 

setCount((prev)=> prev+1) 콜백함수를 사용해야 누적됨 

*/


import React, { useState } from 'react' // useState() 적용 ( React Hook )
import './css/Count.css'

export default function Count() {

  //let count=0  // 일반 변수로 지정하면 JSX 구조내의 변수는 바뀌지 않는다. 

  const [count, setCount] = useState(0)  // useState(초기값) 사용하여 count 변수값을 변경 

  const addCount=()=>{

    //alert("+버튼이 클릭되었습니다.") 

    //count++   // 일반함수로 count 값 변경되지 않음 

    setCount((prev)=>prev+1)  // count 값을 setCount() 함수를 사용하여 1씩 더한값으로 변경  주의) setCount(count++) 안됨 - () 안에는 값만 지정할 수 있슴

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
