import React, { useRef} from 'react'
import styles from './css/animation_gsap.module.css'
import { gsap } from 'gsap' // gsap 적용 

export default function App26_animaition_gsap() {

  // gsap 설치  npm install gsap
  

  const ball = useRef()  // useRef() 사용하여 ball 적용 
  const panel = useRef() // useRef() 사용하여 panel 적용   

  const ballMoving=()=>{
    let endX=panel.current.clientWidth-ball.current.offsetWidth   
    gsap.killTweensOf(ball.current) // 중요 :  react에서 해당요소의 진행중인 에니메이션 종료후 진행  
    gsap.set(ball.current, {left:0})
    gsap.to(ball.current, {left:endX, duration:1, ease:'power1.out'})
  } 


  return (
    <div>
        
        <div id={styles.panel} ref={panel}>


            <div id={styles.ball} ref={ball}>


            </div>


        </div>

        <button id={styles.start_btn} onClick={ballMoving}> start </button>
                             {/*클릭시 ballMoving 함수실행*/}

    </div>
  )
}

