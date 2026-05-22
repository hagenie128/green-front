import React from 'react'
import './css/Product.css'

export default function Product({image,name,text,price,isNew}) {
  return (
    <div className='product'>
        <p className='product_img'>
            <img src={image} alt='이미지 설명'></img>
        </p>
        <p className='product_name'>
            {name}
        </p>
        <p className='product_text'>
            {text}
        </p>
        <p className='product_price'>
            {price}원
        </p>
        {isNew===true&&<span className='new'>New</span>}
    </div>
  )
}
