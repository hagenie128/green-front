import React, { useContext, useState } from 'react'
import style from './css/TodoList.module.css'
import { DarkModeContext } from './DarkModeContext'
import TodoAdd from './TodoAdd'
import { FaRegTrashAlt } from "react-icons/fa";

export default function TodoList() {
  const {darkMode}=useContext(DarkModeContext)
  const initData=[
    {"id":"001", "text":"반응형 공부하기", "status":"active"},
    {"id":"002", "text":"자바스크립트 공부하기", "status":"active"},
    {"id":"003", "text":"리액트 공부하기", "status":"active"}
  ]
  const [todos, setTodos]=useState(initData)
  return (
    <>
        <section id={style.todolist} style={darkMode? {background:'rgb(172, 172, 172)'}:{background:'rgb(250, 250, 250)'}}>
        <ul id={style.todolist_list}>
          {
            todos.map((item)=>{
              return(
                <li key={item.id} className={style.todoli}>
                  <input type='checkbox'/>
                  <p className={`${style.todo_text} ${darkMode===true && style.darkMode}`}>{item.text}</p>
                  <button className={style.trash_btn}><FaRegTrashAlt /></button>
                </li>
              )
            })
          }
        </ul>
    </section>
    <TodoAdd/>
    </>
  )
}
