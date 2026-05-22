import React, { useState } from 'react'
import style from './css/TodoAdd.module.css'
import { v4 as uuidv4 } from 'uuid';//아이디 자동생성

export default function TodoAdd({onAdd}) {
  const [todoData,setTodoData]=useState('')
  const changeTodoData=(e)=>{//이벤트-인풋 내용을 매개변수로 받음
    setTodoData(e.currentTarget.value)//입력하면 그 내용을 밸류로 놓고 투두에 저장
  }
  const addTodoData=(e)=>{
      e.preventDefault()//form요소는 데이터를 보내고 초기화를 시키기 때문에 그걸 막는 매서드
      if(todoData.trim().length!==0){//데이터에서 공백을 모두 빼줌. 데이터가 0과 같지 않을 때만 명령 실행
        onAdd({id:uuidv4(),text:todoData,status:'active'})//uuid가 아이디를 자동생성해줌
      }
    setTodoData('')//입력칸 초기화
  }
  return (
    <section id={style.addtodo}>
        <form id={style.add_form}>
            <input type='text' className={style.add_input} value={todoData} onChange={changeTodoData}/>
            <button className={style.add_btn} onClick={addTodoData}>Add</button>
        </form>
    </section>
  )
}
