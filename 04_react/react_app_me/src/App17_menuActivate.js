import React, { useState } from 'react'
import style from './MenuActivate.module.css'

export default function App17_menuActivate() {
    const menus=[
        {"index":0, "text":"menu0"},
        {"index":1, "text":"menu1"},
        {"index":2, "text":"menu2"},
        {"index":3, "text":"menu3"}
    ]
    const [selectedMenu,setSelectedMenu]=useState(null)
  return (
    <ul id={style.menu_list}>
        {
            menus.map((item)=><li key={item.index} className={`${selectedMenu===item.index && style.selected}`} onClick={()=>setSelectedMenu(item.index)}>{item.text}</li>)
        }
    </ul>
  )
}
