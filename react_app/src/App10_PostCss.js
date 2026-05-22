import React from 'react'
import Div1 from './Components/Div1'
import Div2 from './Components/Div2'

export default function App10_PostCss() {
  // css를 모듈화 시킴!내가 만든 css가 해당 컴포넌트만 적용되도록
  // 클래스명이 같은 경우가 있으니 css는 모듈화 이용
  // 파일명에 oo.module.css 로 .두개쓰기
  return (
    <>
      <Div1/>
      <Div2/>
    </>
  )
}
