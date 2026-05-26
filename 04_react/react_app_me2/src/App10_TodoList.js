import React, { useState } from 'react'
import TodoTitle from './TodoList/TodoTitle'
import TodoState from './TodoList/TodoState'
import TodoList from './TodoList/TodoList'
import DarkModeProvide from './TodoList/DarkModeContext'

export default function App10_TodoList() {
  const categorys=["all","active","complete"]
  const [category,setCategory]=useState("all")
  const changeCategory=(category)=>{
    setCategory(category)
  }
  return (
    <DarkModeProvide>
        <TodoTitle/>
        <TodoState categorys={categorys} category={category} changeCategory={changeCategory}/>
        <TodoList category={category}/>
    </DarkModeProvide>
  )
}
