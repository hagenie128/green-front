

import React, { useState} from 'react';
import styles from './css/menuAtivate.module.css'


function App25_menuActivate02() {  // 기본 컴포넌트 구조 (단축키 rfc - snippets 확장프로그램 )  

  
   const menus=[
    {index:0, text:'menu1'},
    {index:1, text:'menu2'},
    {index:2, text:'menu3'},
    {index:3, text:'menu4'}
   ]

    //const menuLi=useRef([]) // useRef() 이용하여 여러개의 요소를 배열로 적용

    // // 중요) useRef() 사용하면 직접 DOM 컨트롤이 가능하므로 인터렉션 효과 적용시 불필요한 리렌더링 사용주의 ( useStage() 사용 주의  )

    // let selectedMenu=null

    // const menuActivate=(index)=>{      

    //   if(selectedMenu!==null && selectedMenu!==menuLi.current[index]){
    //     selectedMenu.classList.remove(`${styles.selected}`)
    //   }

    //   if(selectedMenu!==menuLi.current[index]){
    //     selectedMenu=menuLi.current[index]       
    //     selectedMenu.classList.add(`${styles.selected}`)
    //   }     
      
    // }    
    

    const [clickIndex, setClickIndex] = useState(null)

    // useRef() 사용하지 않고 useState() 값을 이용하여 UI 리렌더링 시켜 className 속성에 조건문 적용 
  
   
  return (

    <div>
    
      <ul id={styles.menu_list}>
        
        {/* <li ref={selectedMenu}>menu1</li>
        <li >menu2</li>
        <li >menu3</li>
        <li >menu4</li> */} 

        {
            menus.map((item)=>( // map() 사용하여 반복생성 
                <li key={item.index} className={`${item.index===clickIndex && styles.selected }`} onClick={()=>{              
                                    // className 속성에 조건문 적용하여  useState() 값으로 리렌더링 될때 다시 적용 
                    //   menuActivate(item.index)
                     setClickIndex(item.index)
                }}>{item.text}</li>
                                           
            ))            
        }  

            

      </ul>    

      

    </div>
  )
}

export default App25_menuActivate02; 
