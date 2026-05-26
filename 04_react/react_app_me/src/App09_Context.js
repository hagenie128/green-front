import React from 'react'
import Header from './Context/Header'
import Contents from './Context/Contents'
import Footer from './Context/Footer'
import DarkModeProvide from './Context/DarkModeContext'

export default function App09_Context() {
  return (
    <DarkModeProvide>
    <Header/>
    <Contents/>
    <Footer/>
    </DarkModeProvide>
  )
}
