import React from 'react'
import Style from './css/Todo.module.css'
import { BsTrash } from "react-icons/bs";



export default function Todo({todo, onUpdateTodo, onRemove}) { // 할일목록과 할일목록의 상태를 변경하는 onUpdateTodo() 함수를 Props로 전달받음 

  const changeStatus=(e)=>{ // 체크를 변경한 목록의 상태를 바꾼다. 
    const status=e.currentTarget.checked===true ? 'complete' : 'active'
    onUpdateTodo({...todo, status:status}) 
    // 체크상태를 바꾼 목록을 매개변수로 전달하여 Props로 전달받은 onUpdateTodo() 함수를 실행시켜 <TodoList> 컴포넌트에서 전체할일 목록을 변경한다. 
  }

  const deleteTodo=()=>{
    onRemove(todo) // 삭제벼튼을 클릭한 목록데이터를 Props로 전달받은 onRemove() 함수를 실행하여 지움 
  }


  return (
    <li className={Style.todoli} key={todo.id}><input type='checkbox' checked={todo.status==='complete'} onChange={changeStatus}/><p className={Style.todo_text}>{todo.text}</p><button className={Style.trash_btn} onClick={deleteTodo}><BsTrash/></button></li>
  )
}
