
/* 
작업개요

- 상품컨텐츠 컴포넌트 제작 및 스타일 적용 
- 상품컨텐츠 컴포넌트를 사용할때 사용자 정의 속성값 (Props) 으로 상품정보를 입력 
- 상품컨텐츠 컴포넌트를 사용할때 입력된 상품정보를 컴포넌트내에서 Props 매개변수의 속성값으로 전달받아 상품정보 내용을 다르게 보여줌 
- 새 상품정보를 Props 값으로 전달받아 컴포넌트내에서 && 연산자 조건식을 사용하여 새 상품에만 new 아이콘 표시 

*/

import React from 'react'
import './css/Product.css'

export default function Product({image, name, text, price, isNew}) { // 상품 이미지, 이름, 내용, 가격, 신상여부 값을 Props 로 전달받음 

  return (
    <div className="product">
        <p className="product_img">
            <img src={image} alt=""/>
        </p>
        <p className="product_name">
            {name}
        </p>
        <p className="product_text">
            {text}
        </p>
        <p className="product_price">
            {price}<span>원</span>
        </p>
        {isNew===true && <span className="new">New</span> /* isNew props 속성값이 true 일때만 <span>new</span> 테그생성 */}        
        {/*주의 JSX 문법안에서는 직접 if구문을 사용못함 - 삼항 조건 연산자 또는 && 연산자 조건식 사용 */}  

    </div>
  )
}
