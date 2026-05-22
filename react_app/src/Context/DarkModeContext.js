import React, { createContext, useState } from 'react'
export const DarkModeContext=createContext()
// 다른 곳에서 사용할 수 있도록 context 환경을 만들어서 보내줌
// createContext뒤에 ()괄호 붙여주기

//context에 함수가 환경을 제공
export default function DarkModeProvide({ children }) {
    //함수명은 정해져있지 않아서 개인 재량
    const [darkMode, setDarkMode]=useState(false)
    const toggleDarkMode=()=>{
        setDarkMode((prev)=>!prev)
    }
    
  return (
    <DarkModeContext.Provider value={{darkMode,toggleDarkMode}}>
        {children}
    </DarkModeContext.Provider>
    // Provider는 약속되어있음, 값음 {{변수, 사용할 함수}}
    // Children에게 적용하겠다
  )
}
