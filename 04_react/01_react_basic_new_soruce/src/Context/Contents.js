import React, { useContext } from 'react'
import { DarkModeContext } from './DarkModeContext'
import './css/Contents.css'

export default function Contents() {

  const {darkMode} = useContext(DarkModeContext)
  // useContext() 함수를 활용하여 DarkModeContext파일의 value 속성으로 전달받음 darkMode 상태값, toggleDarkMode 함수를 적용
  return (
   <section id='contents' style={darkMode? {backgroundColor:'#2F3C58'} : {backgroundColor:'white'}}> {/*darkMode상태값에 따라 배경색 스타일 바꿔줌 */}

   </section>
  )
}
