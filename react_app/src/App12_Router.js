import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home'
import Notfound from './Pages/Notfound'
import Brand from './Pages/Brand'
import Products from './Pages/Products'

export default function App12_Router() {
    //컴퍼넌트끼리 연결하려면 a태그가 아닌 router이용
    //npm install react-router-dom
    //App 파일은 대체로 맨 처음 router가 들어가있음
    const router=createBrowserRouter(
        [
            {
                path:'/',//경로: 시작하자마자
                element:<Home/>,//어떤 걸? 홈
                errorElement:<Notfound/>//잘못 들어왔을 때
            },
            {
                path:'/Brand',//모든 경로를 객체로 만들어 줌
                element:<Brand/>,
                errorElement:<Notfound/>
            },
            {
                path:'/Products',
                element:<Products/>,
                errorElement:<Notfound/>
            }
        ]
    )
  return (
    <RouterProvider router={router}/>
  )
}
