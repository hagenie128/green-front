/*

Context 개념 

- 여러개의 분리된 컴포넌트에서 특정한 상태나 값을 동시에 적용하기 위해 Context 환경을 만들고 
  ContextProvider 함수를 활용하여 적용하고자 하는 컴포넌트들에게만 분리해서 적용할수있는 기능 


작업개요 

- Context폴더내에 Context 환경을 적용할  Header, Contents, Footer 컴포넌트 제작 

- DarkModeContext 파일제작 ( createContext() 활용하여 DarkModeContext 객체생성과 DarkModeProvider 함수생성 )

- DarkMode 적용할 컴포넌트를 <DarkModeProvider/> 자식 객체로 적용 

- Header 컴포넌트내 버튼이벤트로 useContext()를 활용하여 DarkModeContext 파일의 함수와 변수값을 적용하여 DarkMode, Light 모드로 배경색을 바꾼다. 

- 다른 컴포넌트들도 같은 방법으로 DarkMode, Light 모드로 배경색을 바꾼다.

*/



import React from 'react'
import Header from './Context/Header'
import Contents from './Context/Contents'
import Footer from './Context/Footer'
import DarkModeProvider from './Context/DarkModeContext' // 외부 DarkModeContext 파일에서 DarkModeProvider 적용 

export default function App15_Context() {
  return (
    <>
        <DarkModeProvider> {/* darkMode를 적용할 대상을 DarkModeProvider 컴포넌트의 자식 객체로 적용*/}
            <Header/>
            <Contents/>
            <Footer/>
        </DarkModeProvider>
    </>
  )
}
