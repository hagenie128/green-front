import React, { useEffect, useState } from 'react'
import Product from './Components/Product'
import axios from 'axios'

export default function App07_Product_01() {
    const [products,setProducts]=useState([])
    const [newCheck,setNewCheck]=useState(false)
    useEffect(()=>{
        axios.get(`./data/products.json`).then((res)=>{
            setProducts(res.data)
        })
    },[])
    const changeNewCheck=()=>{
        setNewCheck((prev)=>!prev)
    }
    const getNewProducts=(products)=>{
        if(newCheck===true){
            return(
                products.filter((item,index)=>(item.isNew===true))
            )
        }else{
            return products
        }
    }
    const newProducts=getNewProducts(products)
    const changeProduct=()=>{
        let name=prompt("변경할 상품명을 입력하세요")
        let text=prompt("변경할 상품 내용을 입력하세요")
        let price=prompt("변경할 상품 가격을 입력하세요")
        let isNew=window.confirm("신상품으로 등록할까요?")
        setProducts((prev)=>{
            return(
                prev.map((item,index)=>{
                    if(item.name===name){
                        return ({...item,text,price,isNew})
                    }else{
                        return({...item})
                    }
                })
            )
        })
    }
    const addProduct=()=>{
        let image=prompt("추가할 이미지 경로를 입력하세요")
        let name=prompt("추가할 상품명을 입력하세요")
        let text=prompt("추가할 상품 내용을 입력하세요")
        let price=prompt("추가할 상품 가격을 입력하세요")
        let isNew=window.confirm("신상품으로 등록할까요?")
        setProducts((prev)=>{
            return[...prev,{image,name,text,price,isNew}]
        })
    }
    const removeProduct=()=>{
        let name=prompt("삭제할 품목의 상품명을 입력해주세요")
        setProducts((prev)=>(prev.filter((item,index)=>item.name!==name)))
    }
  return (
    <>
        신상품 보기<input type='checkbox' value={newCheck} onChange={changeNewCheck}/>
        {
            newProducts.map((item,index)=>{
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
