import React, { useContext } from 'react'
import './css/Header.css'
import { DarkModeContext} from './DarkModeContext'

export default function Header() {
    const {darkMode,toggleDarkMode}=useContext(DarkModeContext)
  return (
    <header style={darkMode?{background:'#212a3e'}:{background:'#CCCCCC'}}>
        <button onClick={toggleDarkMode}>{darkMode?'LightMode':'DarkMode'}</button>
    </header>
  )
}
