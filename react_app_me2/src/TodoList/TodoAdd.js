import React, { useContext } from 'react'
import style from './css/TodoAdd.module.css'
import { DarkModeContext } from './DarkModeContext'

export default function TodoAdd() {
  const {darkMode}=useContext(DarkModeContext)
  return (
    <section id={style.addtodo} style={darkMode? {background:'#212A3E'}:{background:'#cccccc'}}>
        <form id={style.add_form}>
            <input className={style.add_input} type='text'></input>
            <button className={`${style.add_btn} ${darkMode===true && style.selected}`}>Add</button>
        </form>
    </section>
  )
}
