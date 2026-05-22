import React, { useState } from 'react'
import style from './MenuActivate.module.css'

export default function App17_menuActivate02() {
    //리액트 방식으로 메뉴 활성화 가능
    const mainMenus=[
        {"index":0,"text":"menu0"},
        {"index":1,"text":"menu1"},
        {"index":2,"text":"menu2"},
        {"index":3,"text":"menu3"},
    ]
    const [selectedMenu,setSelectedMenu]=useState(null)
    
  return (
    <ul id={style.menu_list}>
        {
            mainMenus.map((item)=>{
                return(
                    <li key={item.index} className={`${item.index===selectedMenu && style.selected}`} onClick={()=>{setSelectedMenu(item.index)}}>{item.text}</li>
                    //selectedMenu가 바뀌면 useState가 리랜더링하는 걸 이용해서 클래스에 조건식을 건다
                )
            })
        }
    </ul>
  )
}
