import React from 'react'
import Header from './Context/Header'
import Contents from './Context/Contents'
import Footer from './Context/Footer'
import DarkModeProvide from './Context/DarkModeContext'

export default function App09_Context() {
  return (
    <>
      <DarkModeProvide>
        {/* 자식객체를 children으로 보내 darkMode값과 toggleDarkMode를 사용할 수 있게함 */}
        <Header/>
        <Contents/>
        <Footer/>
      </DarkModeProvide>
    </>
  )
}
