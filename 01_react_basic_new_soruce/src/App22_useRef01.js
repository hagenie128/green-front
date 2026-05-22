

import React, { useEffect, useRef } from 'react';


function App22_useRef01() {     

   // 주의) react 가상 DOM에서는  DOM 직접접근 제한 ( document.querySelector구문제한 )   

   const selectedMenu=useRef()  // useRef() 사용하여 접근 

   useEffect(()=>{ // useEffect() 사용하여 style 적용 
    selectedMenu.current.style.border='solid 3px red'
    // ref변수명.current >> 지정대상 (주의 : 반드시 current 사용 )
   }, [])

   
  return (
    <div>
    
      <ul id="menu_list">
        <li ref={selectedMenu}>menu1</li>
        <li>menu2</li>
        <li>menu3</li>
        <li>menu4</li>
      </ul>    

    </div>
  )
}

export default App22_useRef01; 
