import React from 'react'
import Header from './Components/Header'
import Contents from './Components/Contents'
import Footer from './Components/Footer'

export default function App01_component() {
  return (
    <>
    <Header/>
    <Contents title="메인 타이틀" text="내용 설명"/>
    <Footer/>
    </>
  )
}
