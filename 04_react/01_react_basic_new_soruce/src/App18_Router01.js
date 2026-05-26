/*
react-router-dom 

- CSR 기반에서 페이지끼리 (컴포넌트) 서로 링크될 경로를 직접 설정하고 연동해주는 react 기반의 오픈 API 라이브러리 

- 설치 
  npm install react-router-dom

*/


import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Pages/Home'
import NotFound from './Pages/NotFound'
import Brand from './Pages/Brand'
import Products from './Pages/Products'

export default function App18_Router01() {

  const router=createBrowserRouter(  // 라우터 생성 (객체형식)
    [
        {
            path:'/',  // 경로하나당 하나의 컴포넌트를 연동 
            element:<Home/>,
            errorElement:<NotFound/>
        },
        {
            path:'/brand',
            element:<Brand/>,
            errorElement:<NotFound/>
        },
        {
            path:'/Products',
            element:<Products/>,
            errorElement:<NotFound/>
        },
    ]
  )

  return (
   <RouterProvider router={router}/> // <RouterProvider> 사용하여 적용 
  )

}
