import React, { useEffect, useRef } from 'react'

export default function App14_useRef() {
  const selectedMenu=useRef()//참조,특정한 객체에 변수를 정하고 변수를 찾아서 가져옴
  //selectedMenu.current.style.border='solid 3px red' ref에는 current가 꼭 들어가야함.(지정한 대상)
  useEffect(()=>{
    selectedMenu.current.style.border='solid 3px red'
  },[])
  return (
    <>
        <ul>
            <li ref={selectedMenu}>menu1</li>
            <li>menu2</li>
            <li>menu3</li>
            <li>menu4</li>
        </ul>
    </>
  )
}
