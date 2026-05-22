import React, { useState } from 'react'
// useState 불러들이는지 꼭 확인
import './css/Count.css'

export default function Count({onAdd,onRemove}) {//매개변수로 받음
    // 스크립트 구간
    //리액트는 csr방식으로 ssr방식의 불필요한 서버 통신을 막음
    //상태값(변수)를 바꾸기 위해선 일정한 Hook을 써야함- '상태관리' 라고 함
    /*변수 만드는 방법
    let을 하지 않는 이유는 해당 변수는 지정한 함수에서만 사용할 수 있기 떄문에
    const [변수명,변수를 바꿀 수 있는 함수]=useState(변수 초기값)*/
    // const [count,setCount]=useState(0)
    // const [count,setCount]=useState(0)
    // const [count,setCount]=useState(0)
    // const [count,setCount]=useState(0)
    // const [count,setCount]=useState(0)
    // const [count,setCount]=useState(0)
    // const [count,setCount]=useState(0)
    // const [count,setCount]=useState(0)
    // const [count,setCount]=useState(0)
    // const [count,setCount]=useState(0)

    const [count,setCount]=useState(0)//useState가 실행되며 리렌더링

    const addCount=()=>{
        // alert('더하기 버튼 클릭')
        //setCount(count+1) 매개변수로 값을 보내서 변수를 바꿔줌
        //setCount(count+1) 여러번 넣어도 useState는 한번만 실행됨

        // setCount((prev)=>{ 값을 그대로 넣지 않고 함수안에 함수로 작동을 시키면 연산이 여러번 가능
        //     return prev+1
        // })

        setCount((prev)=>prev+1)//return과 물결 괄호를 생략한 함축식 
        onAdd()//불러온 함수 실행시키기
    }
    const removeCount=()=>{
        if(count>0){//마이너스가 나오지 않아야해서 >=대신 >로
            setCount((prev)=>prev-1)
            onRemove()//마이너스가 되지 않도록 if안에 넣어주기
        }
    }
  return (
    <div className='count_wrap'>
        <div className='remove'>
            <button className='remove_btn' onClick={removeCount}>-</button>
        </div>
        <div className='count'>
            {count}
        </div>
        <div className='add'>
            <button className='add_btn' onClick={addCount}>+</button>
        </div>
    </div>
  )
}
