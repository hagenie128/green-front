import React from 'react'
import Header from './Components/Header'
import Contents from './Components/Contents'
import Footer from './Components/Footer'


export default function App01_component() {
  return (
    <>
      <Header/>
      <Contents title="첫번째 타이틀" text="첫번째 텍스트 내용"/>
      {/* props란 컴포넌트 내 임의의 속성을 만들어서 바꿔낄 수 있도록 변수로 던져줌 */}
      <Footer/>
    </>
  )
}
