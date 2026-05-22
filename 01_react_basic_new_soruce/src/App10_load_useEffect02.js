
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

import React, { useEffect, useState } from 'react'
import Product from './Components/Product' //  Product 컴포넌트 적용 
import axios from 'axios' // axios 라이브러리 적용 

export default function App10_load_useEffect02() {
    

  const [products, setProducts] = useState([]) // 상품정보를 관리할 useState() 사용  ( 상품정보는 배열행태로 초기값 지정 )

  const [saleFile, setSaleFile] = useState(false) // 버튼을 사용하여 세일상품 출력을 관리할 useState() 사용 

  
  const changeFile=()=>{
    setSaleFile((prev)=>!prev)  // 버튼클릭시 세일상품 상태값을 반대로 지정함 
  }


  useEffect(()=>{ 
    /* 
    useEffect() 사용하여 반복적으로 데이터를 로드하지 않게 설정 
    - useEffect 사용하지 않으면 useState 상태가 변화하면서 전체 컴포넌트가 다시 로드되고 axios 명령이 다시 반복실행되는 네트워크 에러 발생  
    */
    axios.get(`./data/products${saleFile ? '_sale' : ''}.json`).then(
         // axios 라이브러리를 사용하여 상품정보가 저장된 products.json, products_sale.json 파일을 세일상품 상태값에 따라 구분해서 로드함
        (res)=>{
            setProducts(res.data) // json 파일로 불러들인 상품정보 data 값을 products 변수값에 배열형태로 저장 

        })
        return (()=>{
             //해당 컴포넌트가 사라질때 실행할 명령 
        })
  },[saleFile])  // 세일상품 상태값이 변할때만 다시 상품정보가 로드되도록 설정 ([] 아무값도 넣지 않으면 한번만 로드)

  

  return (
    <>
        <div className="saleCheck" style={{width:'360px', height:'30px', margin:'24px auto', fontSize:'14px'} }> {/*인라인 스타일 적용 - 객체구조 */ }
            
            <button onClick={changeFile}> {saleFile? '전체상품보기' : '세일상품보기'} </button>  
            {/*버튼 클릭시 세일상품 상태값을 변경하는 함수실행*/} {/*세일상품 상태값에 따라 버튼텍스트 변경*/}
        
        </div> {/* 세일상품만 출력할 수 있도록 체크박스 설정*/}

       
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
