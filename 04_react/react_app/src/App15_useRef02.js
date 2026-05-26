import React, { useEffect, useRef } from 'react'

export default function App15_useRef02() {
    const menus=[
        {"index":"0","text":"menu1"},
        {"index":"1","text":"menu2"},
        {"index":"2","text":"menu3"},
        {"index":"3","text":"menu4"}
    ]
    const mainMenu=useRef([])//메인메뉴에 저장해둠, 배열이니까 빈배열로 넣음
    useEffect(()=>{
        for(const item of mainMenu.current){
            item.style.border='solid 3px red'
        }
    },[])
  return (
    <>
        <ul>
            {
                menus.map((item)=>{
                    return(
                        <li key={item.index} ref={(el)=>(mainMenu.current[item.index]=el)}>{item.text}</li>
                        // el은 현재 li, ref라는 집안에 0,1,2,3이 들어감
                            // QuerySelectorAll 따라하기
                    )
                })
            }
        </ul>
    </>
  )
}
