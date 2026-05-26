import React, { useMemo, useState } from 'react'
import Style from './css/TodoList.module.css'
import AddTodo from './AddTodo';
import Todo from './Todo';
export default function TodoList({category}) {  

  const initData=useMemo(()=>{ // useMemo() 함수를 사용하여 리랜더링 될때  다시 초기화 되는것을 방지 ( 퍼포먼스 줄임 )
    return (
      [ // 초기데이터(할일) 설정 

      {id:'001', text:"반응형공부하기", status:'active'},
      {id:'002', text:"자바스크립트공부하기", status:'active'},
      {id:'003', text:"리액트공부하기", status:'active'}

      ]
    )
  }, [])

  const [todos, setTodos]=useState(initData) // 전체할일을 괸리할 useState() 설정 

  const categoryItems=getCategoryItems(todos, category) // 모든 todos에서 Props로 전달받은 선택된 카테고리에 해당하는 할일들을 구분  

  function getCategoryItems(todos, category){ // 전체할일들과 선택된 카테고리 상태를 매개변수로 전달받음 

    if(category==='all'){ // 선택된 카테고리가 'all' 이면 모든 할일들을 출력 
      return todos
    }else{
      return(
        todos.filter((item)=>(item.status===category)) // 선택된 카테고리와 같은 상태의 할일들만 출력 
      )
    }   
  }

  const updateTodo=(todo)=>{ // <Todo> 컴포넌트에서 전달받은 체크상태가 변경된 할일목록을 전체목록에서 변경한다.   

    setTodos((prev)=>{
      return (
        prev.map((item)=>{
          if(item.id===todo.id){
            return (todo) // 매개변수로 전달받은 체크상태가 바뀐 목록으로 변경한다. 
          }else{
            return ({...item}) // 그렇지 않으면 기존에 목록들을 그대로 반환한다. 
          }
        })
      )
    })
  }


  const addTodo=(todo)=>{ // 할일 목록을 추가하는 함수 적용 
    setTodos((prev)=>{
      return ([...prev, todo]) // 기존에 할일목록에 매개변수로 전달받은 할일목록을 추가하여 전체목록을 변경한다. 
    })
  }

  const removeTodo=(todo)=>{ // 할일목록 삭제하는 함수 적용 
    setTodos((prev)=>{
      return (
        prev.filter((item)=>(item.id!==todo.id)) // <Todo> 컴포넌트에서 매개변수로 전달받은 할일목록을 삭제 
      )
    })
  }

  return (
    <>
        <section id={Style.todolist}>

            <ul id={Style.todolist_list}>               
                 
                    {
                      categoryItems.map((item)=>{
                        return(
                          <Todo todo={item} key={item.id} onUpdateTodo={updateTodo} onRemove={removeTodo}/>
                          /* 각 <Todo> 컴포넌트에  할일목록, 업데이트함수, 삭제하는 함수를 Props로 전달 */
                        )
                      })
                    }
                
            </ul>


        </section>

        <AddTodo onAdd={addTodo}/> {/* 할일목을 추가하는 함수를 <AddTodo> 컴포넌트에 Props로 전달*/}

    </>


  )
}
