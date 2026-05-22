import React, { useContext } from 'react'
import './css/Header.css'
import { DarkModeContext } from './DarkModeContext'

export default function Header() {
    const { darkMode, toggleDarkMode } = useContext(DarkModeContext)
    // DarkModeContext가 제공하는 {darkMode,toggleDarkMode}를 사용하겠다, 물결괄호 사용!
  return (
    <header style={darkMode?{background:'#212a3e'}:{background:'#ccc'}}>
        {/* 다크모드 값에 따라서 백그라운드를 삼항연산자로 */}
        <button onClick={toggleDarkMode}>{darkMode? 'LightMode':'DarkMode'}</button>
    </header>
  )
}
