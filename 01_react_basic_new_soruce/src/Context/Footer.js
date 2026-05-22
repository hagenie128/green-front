import React, { useContext } from 'react'
import { DarkModeContext } from './DarkModeContext'
import './css/Footer.css'

export default function Footer() {

  const {darkMode} = useContext(DarkModeContext) 
  // useContext() 함수를 활용하여 DarkModeContext파일의 value 속성으로 전달받음 darkMode 상태값, toggleDarkMode 함수를 적용
  return (
   <footer style={darkMode ? {backgroundColor:'#212A3E'} : {backgroundColor:'#eeeeee'}}> {/*darkMode상태값에 따라 배경색 스타일 바꿔줌 */}

   </footer>
  )
}
