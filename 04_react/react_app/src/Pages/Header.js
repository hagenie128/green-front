import React from 'react'
import Style from './css/Header.module.css'
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';

export default function Header() {
    const menus=[
        {"id":"001","text":"Home","path":'/'},
        {"id":"002","text":"Brand","path":'/Brand'},
        {"id":"003","text":"Products","path":'/Products'}
    ]
  return (
    <header>
        <nav id={Style.menu}>
            <ul id={Style.menu_list}>
                {
                    menus.map((item,index)=>{
                        return(
                            <li key={uuidv4()}><Link to={item.path}>{item.text}</Link></li>//a태그 대신 Link to사용
                        )
                    })
                }
            </ul>
        </nav>
    </header>
  )
}
