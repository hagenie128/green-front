import React from 'react'
import Product from './Components/Product' //  Product 컴포넌트 적용 

export default function App07_Product() {
  return (
    <>
        <Product image='./images/m3_multiple.png' name='루메나 M3 멀티플 LED' text='세상에 없던 랜턴' price='59,000' isNew={true}/> 
         {/* props - 컴포넌트 내에 출력할 값을 사용자 정의 속성으로 적용*/}       
    </>
  )
}
