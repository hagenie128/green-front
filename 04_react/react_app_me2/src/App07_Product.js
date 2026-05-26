import React, { useEffect, useState } from 'react'
import Product from './Components/Product'
import axios from 'axios'

export default function App07_Product() {
    const [products,setProducts]=useState([])
    const [isSale,setIsSale]=useState(false)
    useEffect(()=>{
        axios.get(`./data/products${isSale? '_sale':''}.json`).then((res)=>{
            setProducts(res.data)
        })
    },[isSale])
    const changeFile=()=>{
        setIsSale((prev)=>!prev)
    }
  return (
    <>
    <button onClick={changeFile}>{isSale? '전체상품 보기':'세일상품 보기'}</button>
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
