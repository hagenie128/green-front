import React, { useContext } from 'react'
import style from './css/TodoState.module.css'
import { DarkModeContext } from './DarkModeContext'

export default function TodoState() {
  const {darkMode}=useContext(DarkModeContext)
  return (
    <section id={style.todostatus} style={darkMode? {background:'#2d3a55'}:{background:'#eeeeee'}}>
        <ul id={style.todostatus_list}>
            <li><button className={style.status_btn}>all</button></li>
            <li><button className={style.status_btn}>active</button></li>
            <li><button className={style.status_btn}>complete</button></li>
        </ul>
    </section>
  )
}
