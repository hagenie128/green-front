import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Product from './Components/Product'

export default function App07_Product() {
  const [products, setProducts]=useState([])//useState는 재렌더링을 돌림
  const [isSale,setIsSale]=useState(false)
  useEffect(()=>{
    axios.get(`./data/products${isSale? '_sale':''}.json`).then((res)=>{
      setProducts(res.data)
    })
  },[isSale])

  const changeFile=()=>{//버튼 누를 때마다 리랜더링
    setIsSale((prev)=>!prev)//반대값으로 바꿔줌
  }

  return (
    <>
      <div className='saleCheck'>
        <button onClick={changeFile}>{isSale? '전체상품 보기':'세일상품 보기'}</button>
        {/* 조건에 따라서 두가지 일을 하니까 삼항 연산자 선택 */}
      </div>
      {
        products.map((item,index)=>{
          return(
            <Product image={item.image} name={item.name} text={item.text} price={item.price} isNew={item.isNew}/>
          )
        })
      }
    </>
  )
}