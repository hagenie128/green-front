import React from 'react'
import Root from './Pages/Root'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Notfound from './Pages/Notfound'
import Home from './Pages/Home'
import Brand from './Pages/Brand'
import Products from './Pages/Products'
import ProductDetail from './Pages/ProductDetail'
import { isMobile } from 'react-device-detect'
import MobileRoot from './Pages/Mobile/MobileRoot'

export default function App13_Router02() {
    //npm install react-device-detect --save 설치 명령
    let router=null
    if(isMobile){
        router=createBrowserRouter([
            {path:'/', element:<MobileRoot/>, errorElement:<Notfound/>}
        ])
    }else{//모바일이 아니라면
        router=createBrowserRouter([
            {path:'/', element:<Root/>, errorElement:<Notfound/>, children:[//아울렛 안에다가 넣어줌
                {index:true, element:<Home/>},//첫 페이지면 홈
                {path:'/Brand', element:<Brand/>},
                {path:'/Products', element:<Products/>},
                {path:'/Product/:productId',element:<ProductDetail/>}//가상요소 경로를 넣고 갈 곳을 정해줌
            ]}
        ])
    }
  return (
    <RouterProvider router={router}/>
  )
}
