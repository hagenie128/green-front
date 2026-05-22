import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home'
import Notfound from './Pages/Notfound'
import Brand from './Pages/Brand'
import Products from './Pages/Products'

export default function App12_Router() {
    const router=createBrowserRouter(
        [
            {
                path:'/',
                element:<Home/>,
                errorElement:<Notfound/>
            },
            {
                path:'/Brand',
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
