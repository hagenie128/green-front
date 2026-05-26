
/*

사용자 디바이스 종류를 체크할수있는 react-device-detact API 설치후 모바일접근 (isMobile) 일때와 그렇지 않은경우를 분리해서 router 설계 

react-device-detact  : react 디바이스 체크 ( 모바일 상태 체크 )

참고사이트 https://www.npmjs.com/package/react-device-detect

설치 
npm install react-device-detect --save

*/

import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './Pages/Home';
import NotFound from './Pages/NotFound';
import Brand from './Pages/Brand';
import Products from './Pages/Products';
import Root from './Pages/Root';
import ProductsDetail from './Pages/ProductDetail';
import MobileRoot from './Pages/mobile/MobileRoot';
import MobileHome from './Pages/mobile/MobileHome';
import MobileBrand from './Pages/mobile/MobileBrand';
import MobileProducts from './Pages/mobile/MobileProducts';
import MobileProductsDetail from './Pages/mobile/MobileProductsDetail';
import MobileNotFound from './Pages/mobile/MobileNotFound';

import { isMobile } from 'react-device-detect';  // 모바일 체크하는 isMobile 객체 바로사용 


export default function App21_Router04() {

    let router=null; // router 초기설정 
    

    if(isMobile){  // 모바일 접근일때 라우터 생성  ( 크롬 Mobile Simulator Ctrl+F5 눌러서 확인 )
        router=createBrowserRouter([ 

        {
            path:'/',
            element:<MobileRoot/>,
            errorElement:<MobileNotFound/>,
            children: [ // <Outlet/> 컴포넌트에 링크하기 위해 children 속성사용 
                {index:true, element:<MobileHome/>}, // <Outlet/> 컴포넌트에 기본으로 보여질 컴포넌트 설정             
                {path:'/mobile/brand', element:<MobileBrand/>},
                {path:'/mobile/products', element:<MobileProducts/>},
                {path:'/mobile/products/:productId', element:<MobileProductsDetail/>}  
            ]       
        }

      ])

   }else{ // 모바일 접근이 아닐때 라우터 생성 
        router=createBrowserRouter([ 

            {
                path:'/',
                element:<Root/>,
                errorElement:<NotFound/>,
                children: [ // <Outlet/> 컴포넌트에 링크하기 위해 children 속성사용 
                    {index:true, element:<Home/>}, // <Outlet/> 컴포넌트에 기본으로 보여질 컴포넌트 설정             
                    {path:'/brand', element:<Brand/>},
                    {path:'/products', element:<Products/>},
                    {path:'/products/:productId', element:<ProductsDetail/>} // products 경로에 특정아이디가 적용됐을때 <ProductDetail/> 상세페이지로 링크 
                ]       
            }

        ])
   }

  return (
     <RouterProvider router={router}/> // 라우터 제공
    )
  
}
