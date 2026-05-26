

import React, { useRef} from 'react';
import styles from './css/menuAtivate.module.css'


function App24_menuActivate01() {  // 기본 컴포넌트 구조 (단축키 rfc - snippets 확장프로그램 )  

  
   const menus=[
    {index:0, text:'menu1'},
    {index:1, text:'menu2'},
    {index:2, text:'menu3'},
    {index:3, text:'menu4'}
   ]

   /*
   중요)  react 에서 인터렉션 효과 주는 방법 

   - 기존에 스크립트에서 사용했던 인터렉션 로직사용 

     ( 장점 : 복잡한 인터렉션 적용시 좋음 ,  단점 : 리렌더링 될때 다시 호출됨 - useEffect(), useMemo(), useCallback() 사용하여 리렌더링시 호출을 제한하여 해결 )

     ***  useEffect() 사용시 주의사항 - 순차적으로 같이 연동되는 변수나 명령들은 같은 useEffect() 안에 설정  ***
   
   
     - useState() 사용하여 UI 리렌더링 적용후 직접 Html 구조 (JSX 문법 )내에 스크립트 적용  
     
     ( 장점 : 로직 단순, 간단한 인터렉션 적합 ,  단점 : 복잡한 인터렉션 적용시 적합하지 않음 - react 기반에서는 복잡한 인터렉션 사용을 제한 하도록 권장 ) 


   */


    const menuLi=useRef([]) // useRef() 이용하여 여러개의 요소를 배열로 적용

    // 중요) useRef() 사용하면 직접 DOM 컨트롤이 가능하므로 인터렉션 효과 적용시 불필요한 리렌더링 사용주의 ( useStage() 사용 주의  )

    let selectedMenu=null

    const menuActivate=(index)=>{      

      if(selectedMenu!==null && selectedMenu!==menuLi.current[index]){
        selectedMenu.classList.remove(`${styles.selected}`)
      }

      if(selectedMenu!==menuLi.current[index]){
        selectedMenu=menuLi.current[index]       
        selectedMenu.classList.add(`${styles.selected}`)
      }     
      
    }   
  
   
  return (

    <div>
    
      <ul id={styles.menu_list}>
        
        {/* <li ref={selectedMenu}>menu1</li>
        <li >menu2</li>
        <li >menu3</li>
        <li >menu4</li> */} 

        {
            menus.map((item)=>( // map() 사용하여 반복생성 
                <li key={item.index} ref={(el)=>(menuLi.current[item.index]=el)} onClick={()=>{ 
                                        /* ref 적용을 순차적으로 배열로 반복적용 */                 
                  menuActivate(item.index)
                }}>{item.text}</li>
                                           
            ))            
        }  

            

      </ul>    

      

    </div>
  )
}

export default App24_menuActivate01; 
