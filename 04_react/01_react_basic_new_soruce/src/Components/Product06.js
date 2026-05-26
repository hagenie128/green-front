/*

작업개요 

- product03.js 컴포넌트를 복사해서 상품컨텐츠 UI 및 스타일 적용 

- 별도의 파일에서 useReducer() 함수를 사용하여 원하는 상품 변경, 추가, 삭제 명령실행

userReducer() 함수 - 여러가지 복잡한 객체나 배열들의 상태관리를 전달된 실행명령(dispatch)에 따라 별도의 함수파일 (reducer) 로 효율적으로 관리할수 있는 기능 
  

형식 

const [객체, dispatch] = userReducer(reducer함수명, 초기데이터값)

dispatch({전달명령타입, 변수})  // 전달명령함수

export default function reducer함수명(객체, action){  //action : 전달명령을 받을 매개변수    

    switch (action.type) {

        case '전달명령타입1': {
            const {변수} = action;
            return (
                실행결과 
            )         
        }
        case '전달명령타입2': {
            const {변수} = action;
            return (
               실행결과
            )           
        }        
        default: {
            throw Error(`알수없는 액션타입 입니다:${action.type}`)
        }
    }
}

*/


import React, { useEffect, useReducer, useState, useImmer } from 'react' // useState() 적용
import './css/product.css'; // product.css 스타일 적용 
import axios from 'axios'; // axios 라이브러리 적용 
import productsReducer from '../reducer/products_reducer_immer'; // 외부 reducer 함수 적용 



export default function Product06() { 

  const initData=[ // 초기 데이터객체 배열 직접입력 (axios.get() 생략)
    {
        "image":"./images/m3_multiple.png",
        "name":"루메나 M3 멀티플 LED",
        "text":"세상에 없던 랜턴",
        "price":"59,000",
        "id":"001"
    }
  ]  

  const [products, dispatch] = useReducer(productsReducer, initData)

  const changePrice=()=>{ // 상품가격을 변경하는 함수 실행 

    let name=prompt("변경할 상품이름을 입력하세요")
    let price=prompt("변경할 가격을 입력하세요")

    dispatch({type:'updated', name, price})


  }

  const addProduct=()=>{ // 상품 추가하는 함수 실행 

    let image=prompt("추가할 상품의 이미지 경로를 입력하세요")
    let name=prompt("추가할 상품명을 입력하세요")
    let text=prompt("추가할 상품내용을 입력하세요")
    let price=prompt("추가할 상품가격을 입력하세요")

    //setProducts((prev)=>([...prev, {image,name,text,price}])) // 기존배열(... 연산자사용 )에 새로운 객체 추가 

    dispatch({type:'added', image, name, text, price})

  }

  const removeProduct=()=>{ // 상품 삭제하는 함수 실행 

    let name=prompt("삭제할 상품명을 입력하세요")    

    dispatch({type:'removed', name})

    //setProducts((prev)=>(prev.filter((item)=>(item.name!==name)))) 
    // filter() 함수를 사용하여 기존 배열의 객체들중에서 삭제할 상품명과 같지 않은 객체들만 보여줌  

  }
  
  return (

    <>      

    {products.map((product)=>{ // map() 메소드를 활용하여 products 변수에 저장되어있는 상품정보 배열을 각 컨텐츠 요소에 보여줌 

        return  (
        
            <div className="product" key={product.id}> {/*상품컨텐츠를 동적으로 생성할때는 각 컨텐츠마다 고유의 Key값 설정 ( JSX 문법규칙) */}

                <p className="product_img">
                    <img src={product.image} alt=""/> {/* 각 배열에 저장된 객체 속성값을 이용하여 상품정보를 보여줌*/}                    
                </p>
                <p className="product_name">
                    {product.name}
                </p>
                <p className="product_text">
                    {product.text}
                </p>
                <p className="product_price">
                    {product.price}<span>원</span>
                </p>                   
        
            </div>            
        )
      }    
    )
  }

  <div style={{width:'300px', height:'auto', margin:'30px auto'}}>
   <button onClick={changePrice}>상품가격변경</button> <button onClick={addProduct}>상품추가</button> <button onClick={removeProduct}>상품삭제</button> 
   {/* 각 상품가격변경, 상품추가, 상품삭제 버튼들을 추가하고 onClick 이벤트로 각 해상 함수 실행*/ }
  </div>

  </>  

  )

}
