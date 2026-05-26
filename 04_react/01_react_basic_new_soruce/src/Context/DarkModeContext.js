import React, { createContext, useState } from 'react' // createContetx()  적용 

export const DarkModeContext=createContext(); // createContext() 적용하여 DarkModeContext 객체생성 

export default function DarkModeProvider({children}) { // DarkModeContext 객체를 활용하여 DarkMode를 적용할 수 있는 DarkModeProvider 생성 

  const [darkMode, setDarkMode] = useState(false)  // DarkMode 상태를 관리 할수있는 useState() 적용 

  const toggleDarkMode=()=>{ // DarkMode 전환하는 함수 적용
    setDarkMode((prev)=>!prev)
  }

  return ( //DarkModeContext 객체를 사용하여 Provider 적용 
    <DarkModeContext.Provider value={{darkMode, toggleDarkMode}}> {/* darkMode 속성값, toggleDargMode 함수를 props로 전달 */} 

        {children}  {/* darkMode를 적용할 대상을 children 객체를 사용하여 적용*/}

    </DarkModeContext.Provider>
  )
}
