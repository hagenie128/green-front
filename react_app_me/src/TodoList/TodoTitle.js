import React, { useContext } from 'react'
import style from './css/TodoTitle.module.css'
import { DarkModeContext } from './DarkModeContext'

export default function TodoTitle() {
  const {darkMode, toggleDarkMode}=useContext(DarkModeContext)
  return (
    <header className={style.head} style={darkMode? {background:'#212A3E'}:{background:'#cccccc'}}>
        <h1 className={style.title}>TodoList</h1>
        <button className={`${style.darkMode_btn} ${darkMode===true && style.selected}`} onClick={toggleDarkMode}>{darkMode? 'LightMode':'DarkMode'}</button>
    </header>
  )
}
