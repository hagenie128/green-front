import React from 'react'
//import './css/Div2.css'   // css 파일을 기본적으로 import 적용하면 다른 컴포넌트의 같은 className 을 가진 요소에도 적용 (충돌)
import Style from './css/Div2.module.css' // css 파일이름에 *.module.css 추가하고 객체형식으로 스타일 적용 (className이 같아도 다는 컴포넌트에서는 적용안됨 - 모듈화 )

export default function Div2() {  
  return (
    <div className={Style.box}>Div2</div>  // className 을  Style.클래스명 으로 적용하여 해당 컴포넌트에서만 적용 - 모듈화 

    /*
    id 사용도 같은방법 (css 모듈화내에서는 다른 컴포넌트에서 같은 id명을 사용해도 충돌 안됨 )      
     
     <div id={Style.red} > </div>  // id 사용할때도 Style.id명 사용 

     div#red{
      background:red
     } 
     
     React 내에서는 id를 많이 사용하지 않고 className을 많이 사용 
     
     */

     /* **** 중복클래스 적용방법 ****       
    className={`${Style.box} ${Style.blue}`} // `역따옴표사용`
    */
  )
}
