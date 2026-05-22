import React, { useEffect, useRef } from 'react'

export default function App14_useRef() {
    const menus=[
        {"index":0,"text":"menu0"},
        {"index":1,"text":"menu1"},
        {"index":2,"text":"menu2"},
        {"index":3,"text":"menu3"}
    ]
    const menu=useRef([])
    useEffect(()=>{
        for(const item of menu.current){
            item.style.border='solid 1px black'
        }
    },[])
  return (
    <ul>
        {
            menus.map((item)=><li key={item.index} ref={(el)=>(menu.current[item.index]=el)}>{item.text}</li>)
        }
    </ul>
  )
}
