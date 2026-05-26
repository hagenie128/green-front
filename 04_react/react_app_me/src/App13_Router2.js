import React from 'react'
import Root from './Pages/Root'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Notfound from './Pages/Notfound'
import Home from './Pages/Home'
import Brand from './Pages/Brand'
import Products from './Pages/Products'

export default function App13_Router2() {
    const router=createBrowserRouter([
        {path:'/',element:<Root/>,errorElement:<Notfound/>,children:[
            {index:true,element:<Home/>},
            {path:'/Brand',element:<Brand/>},
            {path:'/Products',element:<Products/>},
        ]}
    ])
  return (
    <RouterProvider router={router}/>
  )
}