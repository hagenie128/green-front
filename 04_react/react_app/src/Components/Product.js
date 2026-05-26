import React from 'react'
import './css/Product.css'

export default function Product({image,name,text,price,isNew}) {
  return (
    <div className='product'>
        <p className='product_img'>
            <img src={image} alt='이미지 설명'/>
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
        {/* true&&true일 때 실행할 수 있도록, 값이 false면 span이 들어가지 않음 */}
        {/* {isNew===true? <span className='new'>New</span> : ''} */}
        {/* if구문을 jsx에서는 사용할 수 없어서 삼항연산자 사용,
        데이터 타입까지 확인하기 때문에 ===임/ 이와 같은 식은 불필요한 빈문자를
        생성하기 때문에 상단에 있는 &&식으로 변경 */}
    </div>
  )
}
