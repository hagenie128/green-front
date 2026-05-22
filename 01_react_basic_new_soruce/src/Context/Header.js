import React, { useContext } from 'react' // useContext() 함수 적용 
import { DarkModeContext } from './DarkModeContext'  // DarkModeContext 파일적용
import './css/Header.css'



export default function Header() {

  const {darkMode, toggleDarkMode} = useContext(DarkModeContext) 
  // useContext() 함수를 활용하여 DarkModeContext파일의 value 속성으로 전달받음 darkMode 상태값, toggleDarkMode 함수를 적용

  return (
    <header style={darkMode? {backgroundColor:'#212A3E'} : {backgroundColor:'#eeeeee'}}>  {/*darkMode상태값에 따라 배경색 스타일 바꿔줌 */}
        <button onClick={toggleDarkMode}>{darkMode? 'LightMode': 'DarkMode'}</button> {/*darkMode상태값에 따라 텍스트 바꿔줌 */}
    </header>
  )
}
