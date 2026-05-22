import React from 'react'
import style from './css/TodoTitle.module.css'

export default function TodoTitle() {
  return (
    <header id={style.head}>
        <h1 className={style.title}>
            TodoList
        </h1>
    </header>
  )
}
