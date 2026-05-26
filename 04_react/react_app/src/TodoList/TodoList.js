import React, { useEffect, useState } from 'react'
import { BsTrash3 } from "react-icons/bs";
import style from './css/TodoList.module.css'
import TodoAdd from './TodoAdd';


export default function TodoList({category}) {
    const initData=[//배열을 만들어 줌
        {"id":"001", "text":"반응형 공부하기", "status":"active"},
        {"id":"002", "text":"자바스크립트 공부하기", "status":"active"},
        {"id":"003", "text":"리액트 공부하기", "status":"active"}
    ]
    const [todos,setTodos]=useState(JSON.parse(localStorage.getItem('todos'))||initData)//JSON.parse-JSON형식으로 바꿔주는 매서드, 로컬스토리지 데이터가 없으면 initdata를 넣어라
    //로컬스토리지에서 아이템 가져오기('가져올 곳')

    useEffect(()=>{
        localStorage.setItem('todos',JSON.stringify(todos))
    },[todos])//todos가 바뀔때만 저장
    //node.js 자체 데이터를 저장해주는 명령('저장할 공간','저장할 데이터')
    //localstorage에 저장하면 새로고침해도 값이 변하지 않음
    //배열로 저장이 안되고 텍스트형식으로만 저장이 가능함, 텍스트 형식으로 바꿔주는 JSON매서드 이용
    //DB연결하게되면 의미없는 기능이긴함

    const getCategoryItems=(todos, category)=>{//일단 매개변수로 넣음
        if(category==='all'){
            return todos//all이면 todos를 모두 내보냄
        }else{
            return(
                todos.filter((item,index)=>{
                    if(item.status===category){//카테고리와 status가 같으면
                        return item//그 아이템을 리턴한다
                    }
                })
            )
        }
    }
    const categoryItems=getCategoryItems(todos,category)//실제 데이터를 던져줌
    const upDateTodo=(todo)=>{
        setTodos((prev)=>{
            return(
                prev.map((item)=>{
                    if(item.id===todo.id){
                        return todo//아이템을 받은 값으로 대체
                    }else{
                        return ({...item})//기존값 그대로 리턴
                    }
                })
            )
        })
    }
    const changeStatus=(item, e)=>{
        const status=e.currentTarget.checked===true? 'complete':'active'
        upDateTodo({...item,status:status})
    }//클릭한 아이템이 체크되어있다면 컴플릿, 아니면 액티브로 설정
    //todos에 item의 status를 바꿔줌
    const addTodo=(todo)=>{
        setTodos((prev)=>{
            return [...prev, todo]
        })
    }
    const removeTodo=(todo)=>{
        setTodos((prev)=>prev.filter((item)=>item.id!==todo.id))
    }
  return (
    <>
        <section id={style.todolist}>
        <ul id={style.todolist_list}>
            {/* <li className={style.todoli}>
                <input type='checkbox'/>
                <p className={style.todo_text}>반응형 공부하기</p>
                <button className={style.trash_btn}><BsTrash3/></button>
            </li>
            <li className={style.todoli}>
                <input type='checkbox'/>
                <p className={style.todo_text}>자바스크립트 공부하기</p>
                <button className={style.trash_btn}><BsTrash3/></button>
            </li>
            <li className={style.todoli}>
                <input type='checkbox'/>
                <p className={style.todo_text}>리액트 공부하기</p>
                <button className={style.trash_btn}><BsTrash3/></button>
            </li> */}
            {
                categoryItems.map((item,index)=>{//todos가 아닌 걸러낸 아이템을 뿌려줌
                    return(
                        <li key={item.id} className={style.todoli}>
                            <input type='checkbox' checked={item.status==='complete'} //체크-true이면 컴플릿
                            onChange={(e)=>{changeStatus(item,e)//이벤트 객체
                            }}/>
                            <p className={style.todo_text}>{item.text}</p>
                            <button className={style.trash_btn} onClick={()=>{removeTodo(item)}}><BsTrash3/></button>
                        </li>
                    )
                })
            }
        </ul>
    </section>
    <TodoAdd onAdd={addTodo}/>
    {/* props로 함수 전달 */}
    </>
  )
}
