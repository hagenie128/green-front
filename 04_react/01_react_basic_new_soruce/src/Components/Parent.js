
/* 
작업개요

- 상품컨텐츠 컴포넌트 제작 및 스타일 적용 
- 상품컨텐츠 컴포넌트를 사용할때 사용자 정의 속성값 (Props) 으로 상품정보를 입력 
- 상품컨텐츠 컴포넌트를 사용할때 입력된 상품정보를 컴포넌트내에서 Props 매개변수의 속성값으로 전달받아 상품정보 내용을 다르게 보여줌 
- 새 상품정보를 Props 값으로 전달받아 컴포넌트내에서 && 연산자 조건식을 사용하여 새 상품에만 new 아이콘 표시 

*/

import React from 'react'
import './css/Product.css'

export default function Parent({children}) { // 자식객체를 children Props로 전달받음 (children 이름 규칙 )

  return (
    <div className="product">
        {children}  {/*전달받은 children 객체를 자식요소로 적용 (children객체로 전달받아서 적용하지 않으면 나타나지 않음 ) */}
    </div>
  )
}
