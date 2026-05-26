import React, { useContext, useState } from 'react'
import style from './css/TodoAdd.module.css'
import { DarkModeContext } from './DarkModeContext'
import { v4 as uuidv4 } from 'uuid';

export default function TodoAdd({onAdd}) {
    const {darkMode}=useContext(DarkModeContext)
    const [todoData,setTodoData]=useState('')
    const changeTodoData=(e)=>{
      setTodoData(e.currentTarget.value)
    }
    const addTodoData=(e)=>{
      e.preventDefault()
      if(todoData.trim().length!==0){
        onAdd({id:uuidv4(),text:todoData,status:'active'})
      }
    }
  return (
    <section id={style.addtodo} style={darkMode? {background:'#212A3E'}:{background:'#cccccc'}}>
        <form id={style.add_form}>
            <input className={style.add_input} type='text' value={todoData} onChange={changeTodoData}></input>
            <button className={`${style.add_btn} ${darkMode===true && style.selected}`} onClick={addTodoData}>Add</button>
        </form>
    </section>
  )
}
