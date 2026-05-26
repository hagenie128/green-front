
/*

작업개요 

- 상품이 많을때 Product 컴포넌트를 복사하면 상품정보데이터 관리가 불편 - json 파일형식으로 외부데이터로 저장하고 axios (비동기처리라이브러리) 활용하여 불러들임 

- 상품정보를 세일상품과 구분해서 json 형태로 저장하고 axios 비동기 통신으로 로드해서 useState() 함수로 배열 형태로 저장 

- axios 라이브러리 설치명령  npm install axios 

- map() 메서드를 이용하여 상품컨텐츠에 상품정보를 보여줌 

******* 중요 *******
- useState() 함수로 상태값이 변할때 마다 컴포넌트 전체가 다시 로드되면서 상품정보를 계속 불필요하게 반복해서 로드됨 
- useEffect() 함수를 사용하여 상품정보를 특정한 조건에서만 로드 되도록 설정 

형식 

useEffect(()=>{

  실행할 명령 

  return ()=>{
    해당 컴포넌트가 사라질때 실행할 명령 
  }

}, [반복조건])  // [] 아무조건도 넣지 않으면 한번만 실행 

- 체크박스를 활용하여 세일상품만 보여지도록 설정하고 체크상태를 바꿀때만 상품정보를 로드하도록 설정 
- 상품컨텐츠를 동적으로 생성할때는 상품컨텐츠 마다 고유한 Key 값을 적용 ( JSX 문법규칙 )

*/

import React, { useState } from 'react'
import Product from './Components/Product' //  Product 컴포넌트 적용 


export default function App08_load_initData() {


  const initData=[ // 상품정보데이터를 배열로 지정 
    {
      id:"001",
      image:"./images/m3_multiple.png",
      name:"루메나 M3 멀티플 LED",
      text:"세상에 없던 랜턴",
      price:"59,000",        
      "isNew":true
  },
  {
      "id":"002",
      "image":"./images/spaceon.png",
      "name":"루메나 SPACE ON 테이블램프",
      "text":"놓는 순간 갤러리가 되는 아트 오브제",
      "price":"99,000",        
      "isNew":false
  },
  {
      "id":"003",
      "image":"./images/package.png",
      "name":"M3 테이블 램프 패키지",
      "text":"다양하게 즐기는 테이블 램프 레이아웃",
      "price":"99,000",        
      "isNew":true
  }
  ]

  const [products, setProducts] = useState(initData) // 상품정보를 관리할 useState() 사용  ( 상품정보는 배열행태로 초기값 지정 )

  
  return (
    <>
       
       {
        products.map((item)=>{ // map() 메소드를 활용하여 products 변수에 저장되어있는 상품정보 배열을 각 컨텐츠 요소에 보여줌 

            return (                  
              <Product image={item.image} name={item.name} text={item.text} price={item.price} isNew={item.isNew}/>                 
                //상품이 많을때 Product 컴포넌트를 복사하면 상품정보데이터 관리가 불편 - axios 활용하여 외부데이터를 불러들임   
                // 각 배열에 저장된 객체 속성값을 props값으로 적용하여 상품정보를 보여줌  
             )            
        })
       }      
        
          
    </>
  )
}
