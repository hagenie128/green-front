import React, { useRef } from 'react'
import style from './MenuActivate.module.css'

export default function App16_menuActivate() {
    const mainMenus=[
        {"index":0,"text":"menu0"},
        {"index":1,"text":"menu1"},
        {"index":2,"text":"menu2"},
        {"index":3,"text":"menu3"},
    ]
    const mainMenu=useRef([])//queryselectorAll 한거임
    let selectedMenu=null;
    
    const menuActivate=(index)=>{
        if(selectedMenu!==null && selectedMenu!==mainMenu.current[index]){
            selectedMenu.classList.remove(`${style.selected}`)
        }
        if(selectedMenu!==mainMenu.current[index]){
            selectedMenu=mainMenu.current[index]
            selectedMenu.classList.add(`${style.selected}`)
        }//리액트가 추구하는 바는 아니지만 실행 가능
    }

  return (
    <ul id={style.menu_list}>
        {
            mainMenus.map((item)=>{
                return(
                    <li key={item.index} ref={(el)=>mainMenu.current[item.index]=el} onClick={()=>{
                        menuActivate(item.index)}}>{item.text}</li>
                )
            })
        }
    </ul>
  )
}
