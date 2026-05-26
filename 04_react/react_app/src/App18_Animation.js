import React, { useRef } from 'react'
import style from './Animation.module.css'
import gsap from 'gsap'//npm install gsap 명령어 이용하여 설치

export default function App18_Animation() {
  const ball=useRef()
  const panel=useRef()

  const ballMoving=()=>{
    let endX=panel.current.clientWidth-ball.current.offsetWidth
    //ref로 잡은 건 그 대상이라고 알려줘야하니 current를 꼭 붙여야 함
    gsap.killTweensOf(ball.current)
    //진행중인 애니메이션을 리셋(컴포넌트와 애니메이션의 충돌을 막기위해)
    //html에 넣으면 애니메이션이 자동 리셋이 되지만 컴포넌트는 리셋 명령을 줘야함
    gsap.set(ball.current,{left:0})
    gsap.to(ball.current,{left:endX,duration:1,ease:'power1.out'})
  }

  return (
    <>
    <div id={style.panel} ref={panel}>
      <div id={style.ball} ref={ball}></div>
    </div>
    <button id={style.start_btn} onClick={ballMoving}>start</button>
    </>
  )
}

