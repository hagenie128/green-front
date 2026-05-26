import React from 'react'
import Header from './Components/Header'
import Contents from './Components/Contents'
import Footer from './Components/Footer'

export default function App01_Component() {
  return (
    <>
    <Header/>
    <Contents title="타이틀 들어갈 자리" text="내용 들어갈 자리"/>
    <Footer text="푸터 내용"/>
    </>
  )
}
