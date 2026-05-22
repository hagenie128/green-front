import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './Pages/Root'
import NotFound from './Pages/NotFound'
import Home from './Pages/Home'
import Brand from './Pages/Brand'
import Products from './Pages/Products'

export default function App19_Router02() {

  

  const router=createBrowserRouter([

    {
        path:'/',
        element:<Root/>,
        errorElement:<NotFound/>,
        children: [ // <Outlet/> 컴포넌트에 링크하기 위해 children 속성사용 
            {index:true, element:<Home/>}, // <Outlet/> 컴포넌트에 처음으로 보여질 컴포넌트 설정    
            {path:'/brand', element:<Brand/>},
            {path:'/products', element:<Products/>}
        ]

    }

  ])

  return (
    <RouterProvider router={router}/>
  )
}
