import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

export default function Root() {
  return (
    <>
        <Header/>

            <Outlet/>  {/* Header, Footer 고정한상태에서 react-router-dom API 에서 제공하는  <Outlet> 컴포넌트를 사용하여 자식걕체로 링크 */}

        <Footer/>
      
    </>
  )
}
