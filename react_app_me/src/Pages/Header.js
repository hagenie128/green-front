import React from 'react'
import style from './css/Header.module.css'
import { Link } from 'react-router-dom'

export default function Header() {
  const menus=[
    {"id":"001","text":"Home","path":'/'},
    {"id":"002","text":"Brand","path":'/Brand'},
    {"id":"003","text":"Products","path":'/Products'}
  ]
  return (
    <header>
        <nav id={style.menu}>
            <ul id={style.menu_list}>
                {/* <li>Home</li>
                <li>Brand</li>
                <li>Products</li> */}
                {
                  menus.map((item,index)=>{
                    return(
                      <li key={item.id}><Link to={item.path}>{item.text}</Link></li>
                    )
                  })
                }
            </ul>
        </nav>
    </header>
  )
}
