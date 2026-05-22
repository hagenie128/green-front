import React, { useState } from 'react'
import Style from './css/AddTodo.module.css'
import { v4 as uuidv4 } from 'uuid';

export default function AddTodo({onAdd}) {

  const [todoData, setTodoData] = useState('')

  const todoDataChange=(e)=>{
    setTodoData(e.currentTarget.value)
  }

  const addTodoData=(e)=>{ // 입력된 텍스트 데이터를 활용하여 목록을 만든후 Props로 전달받은 onAdd 함수를 이용하여 할일 추가 

    e.preventDefault() // 중요)  폼요소안에 버튼으로 submmit 진행할때 기본 이벤트 설정을 막아주지 않으면 관계된 모든 컴포넌트를 다시 리랜더링하여 데이터값이 초기화 된다.  

    if(todoData.trim().length!==0){ // 아무내용을 입력하지 않고 추가했을때만 실행되지 않게 막아줌 
      onAdd({id:uuidv4(), text:todoData, status:'acitve' })
    }

    setTodoData('') // 추가한 다음 입력한 텍스트가 남지 않게 초기화 설정 
    
  }

  return (
    <section id={Style.addtodo}>

        <form id={Style.add_form}>
            <input type="text" className={Style.add_input} value={todoData} onChange={todoDataChange} /> <button className={Style.add_btn} onClick={addTodoData}>Add</button>
        </form>

    </section>
  )
}
