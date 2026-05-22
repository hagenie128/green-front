import React from 'react'
import { useParams } from 'react-router-dom'

export default function ProductDetail() {

    const {productId}=useParams()//받은 파라미터 값을 들고오는 Hook
  return (
    <>
        <div>ProductDetail</div>
        <p>상품아이디 : {productId}</p>
    </>
  )
}
