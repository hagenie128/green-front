import React, { useEffect, useState } from 'react'
import TodoState from './TodoList/TodoState'
import TodoTitle from './TodoList/TodoTitle'
import TodoList from './TodoList/TodoList'

export default function App11_ToDoList() {
  const categorys=['all','active','complete']
  const [category, setCategory]=useState(JSON.parse(localStorage.getItem('category'))||'all')//다시 JSON형식으로
  useEffect(()=>{
    localStorage.setItem('category',JSON.stringify(category))//배열을 텍스트로 바꿔서 저장해두기
  },[category])//카테고리 저장해보기
  const changeCategory=(category)=>{
    setCategory(category)
  }
  return (
    <>
    <TodoTitle/>
    <TodoState categorys={categorys} category={category} changeCategory={changeCategory}/>
    <TodoList category={category}/>
    </>
  )
}
