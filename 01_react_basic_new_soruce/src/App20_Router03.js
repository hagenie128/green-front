/*
  작업개요 

   <Products> 페이지에서 상품 아이디값을 입력하고  useNavigate() 함수를 이용하여 링크객체 생성후 동적으로 <ProductDetail> 페이지로 링크 

   <ProductDetail> 페이지에서 useParams() 함수를 활용하여 입력된 상품아이값을 출력 

*/



import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './Pages/Root'
import NotFound from './Pages/NotFound'
import Home from './Pages/Home'
import Brand from './Pages/Brand'
import Products from './Pages/Products'
import ProductDetail from './Pages/ProductDetail'

export default function App20_Router03() {


  const router=createBrowserRouter([

    {
        path:'/',
        element:<Root/>,
        errorElement:<NotFound/>,
        children: [ // <Outlet/> 컴포넌트에 링크하기 위해 children 속성사용 
            {index:true, element:<Home/>}, // <Outlet/> 컴포넌트에 처음으로 보여질 컴포넌트 설정    
            {path:'/brand', element:<Brand/>},
            {path:'/products', element:<Products/>},
            {path:'/products/:productId', element:<ProductDetail/>} // <Products> 페이지에서 아이디를 입력하면 <ProductDetail> 페이지로 이동
        ]

    }

  ])

  return (
    <RouterProvider router={router}/>
  )
}
