import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

export default function Root() {//헤더, 푸터 있는 컴퍼넌트
  return (
    <>
        <Header/>
        <Outlet/>
        {/* 라우터 돔에 약속된 컴포넌트(창고), children이 여기에 들어감 */}
        <Footer/>
    </>
  )
}
