import React, { useContext, useState } from 'react'
import style from './css/TodoList.module.css'
import { BsTrash3 } from "react-icons/bs";
import TodoAdd from './TodoAdd';
import { DarkModeContext } from './DarkModeContext';

export default function TodoList({category}) {
  const {darkMode}=useContext(DarkModeContext)
  const initData=[//배열을 만들어 줌
    {"id":"001", "text":"반응형 공부하기", "status":"active"},
    {"id":"002", "text":"자바스크립트 공부하기", "status":"active"},
    {"id":"003", "text":"리액트 공부하기", "status":"active"}
  ]
  const [todos, setTodos]=useState(initData)
  const getCategoryItems=(todos,category)=>{
    if(category==='all'){
      return todos
    }else{
      return(
        todos.filter((item)=>{
          if(item.status===category){
            return item
          }
        })
      )
    }
  }
  const changeStatus=(item,e)=>{
    const status=e.currentTarget.checked===true? 'complete':'active'
    upDateTodo({...item,status})
  }
  const upDateTodo=(todo)=>{
    setTodos((prev)=>{
      return(
        prev.map((item)=>{
          if(item.id===todo.id){
            return todo
          }else{
            return ({...item})
          }
        })
      )
    })
  }
  const addTodo=(todo)=>{
    setTodos((prev)=>{
      return(
        [...prev,todo]
      )
    })
  }
  const removeTodo=(todo)=>{
    setTodos((prev)=>{
      return(
        prev.filter((item)=>{
          return(
            item.id!==todo.id
          )
        })
      )
    })
  }
  const categoryItems=getCategoryItems(todos,category)
  return (
    <>
        <section id={style.todolist} style={darkMode? {background:'rgb(172, 172, 172)'}:{background:'rgb(250, 250, 250)'}}>
        <ul id={style.todolist_list}>
            {
              categoryItems.map((item)=>{
                return(
                  <li key={item.id} className={style.todoli}>
                  <input type='checkbox' checked={item.status==='complete'} onChange={(e)=>{changeStatus(item,e)}}/>
                  <p className={`${style.todo_text} ${darkMode===true && style.selected}`} >{item.text}</p>
                  <button className={style.trash_btn} onClick={()=>{removeTodo(item)}}><BsTrash3 /></button>
                  </li>
                )
              })
            }
        </ul>
    </section>
    <TodoAdd onAdd={addTodo}/>
    </>
  )
}
