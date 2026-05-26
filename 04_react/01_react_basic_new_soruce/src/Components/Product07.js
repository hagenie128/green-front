/*
작업개요 

useMemo() - 컴포넌트가 다시 랜더링 될때마다 특정한 값이 다시 설정되지 않도록 기억해 두는 기능 

useCallback() - 컴포넌트가 다시 랜더링 될때마다 특정한 함수가 다시 설정되지 않도록 기억해 두는 기능 

( useEffect() 실행자체를 제한하지만  useMemo(), useCallback() 함수는 결과 값을 기억해 두는 차이 ) 

*/


import React, { useEffect, useReducer, useState, useImmer, useMemo, useCallback } from 'react' // useState() 적용
import './css/product.css'; // product.css 스타일 적용 
import axios from 'axios'; // axios 라이브러리 적용 
import productsReducer from '../reducer/products_reducer_immer'; // 외부 reducer 함수 적용 



export default function Product07() { 

  const initData=useMemo(()=>[ // useMemo() 함수를 사용하여 컴포넌트(함수)가 다시 랜더링 될때마다 변수값이 다시 설정되지 않도록 해줌 
        {
            "image":"./images/m3_multiple.png",
            "name":"루메나 M3 멀티플 LED",
            "text":"세상에 없던 랜턴",
            "price":"59,000",
            "id":"001"
        }
  ], [])

  const [products, dispatch] = useReducer(productsReducer, initData)

  const changePrice=useCallback(()=>{ // useCallback() 함수를 사용하여 컴포넌트(함수)가 다시 랜더링 될때마다 함수가 다시 설정되지 않도록 해줌 

    let name=prompt("변경할 상품이름을 입력하세요")
    let price=prompt("변경할 가격을 입력하세요")

    dispatch({type:'updated', name, price})


  }, []) // 배열안에 특정값이 변할때마다 다시 설정 ( 빈배열이면 한번만 기억 )

  const addProduct=useCallback(()=>{ // useCallback() 함수를 사용하여 컴포넌트(함수)가 다시 랜더링 될때마다 함수가 다시 설정되지 않도록 해줌 

    let image=prompt("추가할 상품의 이미지 경로를 입력하세요")
    let name=prompt("추가할 상품명을 입력하세요")
    let text=prompt("추가할 상품내용을 입력하세요")
    let price=prompt("추가할 상품가격을 입력하세요")

    //setProducts((prev)=>([...prev, {image,name,text,price}])) // 기존배열(... 연산자사용 )에 새로운 객체 추가 

    dispatch({type:'added', image, name, text, price})

  },[])

  const removeProduct=useCallback(()=>{ // useCallback() 함수를 사용하여 컴포넌트(함수)가 다시 랜더링 될때마다 함수가 다시 설정되지 않도록 해줌 

    let name=prompt("삭제할 상품명을 입력하세요")    

    dispatch({type:'removed', name})

    //setProducts((prev)=>(prev.filter((item)=>(item.name!==name)))) 
    // filter() 함수를 사용하여 기존 배열의 객체들중에서 삭제할 상품명과 같지 않은 객체들만 보여줌  

  },[])
  
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
