
import React from 'react'
import './css/Button.css'

export default function Button({text}) { // text 속성값을 Props로 전달받음 

  const clickButton=()=>{ // 화살표 함수사용 

    alert("버튼이 클릭되었습니다.")

  }

  /*
  
  document.querySelector() 사용하여 이벤트를 적용하면 각 분리되어있는 컴포넌트들의 요소에서 모두 실행되기때문에 
   특정 컴포넌트내에서 독립적인 실행을 위해 인라인 형태로 이벤트를 적용한다.
   
   */

  return (
    <button onClick={clickButton}> {/* 인라인 이벤트 사용 */}
      {text}  {/*전달받은 text속성값을 출력 */}
    </button>
  )
}
