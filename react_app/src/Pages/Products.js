import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Products() {
  const [productId, setProductId]=useState('')
  const navigate=useNavigate()//명령으로 이동하는 매서드를 변수에 저장
  const changProductId=(e)=>{
    setProductId(e.currentTarget.value)//입력한 값
  }
  const submitProductId=(e)=>{//폼요소의 이벤트를 가져와서 매서드 사용
    e.preventDefault()//폼요소의 초기화를 막는 매서드(a태그와 충돌할 때 막기도 함)
    navigate(`/Product/${productId}`)
    setProductId('')//입력값을 비워줌. 중요
  }
  return (
    <>
        <div>Products</div>
        <form onSubmit={submitProductId}>
          {/* 폼이 전송되는 이벤트 */}
          <input type='text' placeholder='상품아이디 입력' value={productId} onChange={changProductId}/>
        </form>
    </>
  )
}
