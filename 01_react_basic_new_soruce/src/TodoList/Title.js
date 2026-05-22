import React from 'react'
import Style from './css/Title.module.css'

export default function Title() {
  return (
    <header>
        <h1 className={Style.title}>TodoList</h1>
    </header>
  )
}
