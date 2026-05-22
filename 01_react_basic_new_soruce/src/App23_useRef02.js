

import React, { useEffect, useRef } from 'react';


function App23_useRef02() {  // 기본 컴포넌트 구조 (단축키 rfc - snippets 확장프로그램 )  

  
   const menus=[
    {index:0, text:'menu1'},
    {index:1, text:'menu2'},
    {index:2, text:'menu3'},
    {index:3, text:'menu4'}
   ]

    const selectedMenu=useRef([]) // useRef() 이용하여 여러개의 요소를 배열로 적용


    useEffect(()=>{

      //selectedMenu.current[0].style.border='solid 3px red' // useRef() 사용하여 배열로 지정하면 순차적 접근 가능 
      for(const item of selectedMenu.current){  // for구문을 사용하여 모든요소 접근 가능 
        item.style.border='solid 3px red'
      }

    },[]) 
  
   
  return (
    <div>
    
      <ul id="menu_list">
        
        {/* <li ref={selectedMenu}>menu1</li>
        <li >menu2</li>
        <li >menu3</li>
        <li >menu4</li> */} 

        {
            menus.map((item)=>( // map() 사용하여 반복생성 
                <li key={item.index} ref={(el)=>(selectedMenu.current[item.index]=el)}>{item.text}</li>
                                           /* ref 적용을 순차적으로 배열로 반복적용 */
            ))            
        }           

      </ul>    

    </div>
  )
}

export default App23_useRef02; 
