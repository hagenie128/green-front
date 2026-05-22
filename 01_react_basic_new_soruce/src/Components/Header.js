
// Header 컴포넌트 제작 

import React from 'react' // 해당 컴포넌트에 적용된 CSS 스타일 입력 
import './css/Header.css'

export default function Header() { // 컴포넌트 이름 첫글자 반드시 대문자 - 파일이름과 같음 (export default - 해당컴포넌트를 외부에서 사용할수 있도록 출력)

  return ( // return 메소드를 활용하여 렌더링
    <header>
        <h1 id="logo">
           <img src="./images/logo.svg" alt=""/>  {/*종료테그가 없는 테그는 반드시 "/" 사용하여 막음 */}
           {/*public폴더안에 images 경로는 어디서는 같은 경로에서 사용가능 - 차후 배포시 build 폴더 경로를 기준 */}
        </h1>      
    </header>
  )
}
