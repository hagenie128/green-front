import React from 'react'
import { useParams } from 'react-router-dom'

export default function ProductDetail() {

  const {productId} = useParams()  // router 설계에서 지정된 '/products/:productId' 경로의 productId 값을 useParams() 사용하여 저장 

  /* 구조분해 할당 
      const test = useParams()  test 값은 {productId:아이디값} 객체 
      const productId=test.productId
  */

  return (
    <div> 
        ProductDetail
        <p style={{margin:'20px'}}>상품아이디: {productId} </p>
      
    </div>
  )
}
