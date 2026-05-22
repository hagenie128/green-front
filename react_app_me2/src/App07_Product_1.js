import React, { useEffect, useState } from 'react'
import Product from './Components/Product'
import axios from 'axios'

export default function App07_Product_1() {
    const [products,setProducts]=useState([])
    const [showNew,setNewProduct]=useState(false)
    useEffect(()=>{
        axios.get(`./data/products.json`).then((res)=>{
            setProducts(res.data)
        })
    },[])
    const changeNewProduct=()=>{
        setNewProduct((prev)=>!prev)
    }
    const getNewProduct=(products)=>{
        if(showNew){
            return(products.filter((item,index)=>(item.isNew===true)))
        }else{
            return products
        }
    }
    const NewProducts=getNewProduct(products)
    const changeProduct=()=>{
        let name=prompt("변경할 상품 이름을 입력하세요")
        let text=prompt("변경할 상품 내용을 입력하세요")
        let price=window.prompt("변경할 상품 가격을 입력하세요")
        let isNew=window.confirm('신상품으로 등록할까요?')
        setProducts((prev)=>{
            return(
                products.map((item,index)=>{
                    if(item.name===name){
                        return{...item,text,price,isNew}
                    }else{
                        return{...item}
                    }
                })
            )
        })
    }
    const addProduct=()=>{
        let image=prompt("추가할 상품 이름을 입력하세요")
        let name=prompt("추가할 상품 이름을 입력하세요")
        let text=prompt("추가할 상품 내용을 입력하세요")
        let price=window.prompt("추가할 상품 가격을 입력하세요")
        let isNew=window.confirm('신상품으로 등록할까요?')    
        setProducts((prev)=>[...prev,{image,name,text,price,isNew}])    
    }
    const removeProduct=()=>{
        let name=prompt("삭제할 상품 이름을 입력하세요")
        setProducts((prev)=>(prev.filter((item,index)=>item.name!==name)))
    }
  return (
    <>
        <button onClick={changeNewProduct}>{showNew?'전체상품보기':'신상품보기'}</button>
        {
            NewProducts.map((item,index)=>{
                return(
                    <Product image={item.image} name={item.name} text={item.text} price={item.price} isNew={item.isNew}/>
                )
            })
        }
        <button onClick={changeProduct}>상품수정</button>
        <button onClick={addProduct}>상품추가</button>
        <button onClick={removeProduct}>상품삭제</button>
    </>
  )
}
