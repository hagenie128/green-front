import React, { useEffect, useState } from 'react'
import Product from './Components/Product'
import axios from 'axios'

export default function App07_Product() {
  //뿌려줄 함수를 useState로 만들기
  const [products, setProducts]=useState([])//들어갈 내용이 배열이니
  // 초기값에 빈 배열을 하나 만들어주거나 만들어 준 배열을 넣어줌
  const [isSale,setIsSale]=useState(false)
  useEffect(()=>{//제어할 일을 Hook 이용 함수로, 이렇게 하지 않으면 axios가 계속 실행되어 네트워크 에러
    axios.get(`./data/products${isSale? '_sale':''}.json`).then((res)=>{
      setProducts(res.data)//이때 또 렌더링
    })
  },[isSale])//{{할 일},[들어간 값이 바뀔 때마다]}, []빈 문자로 하면 한번만 실행
  const activeSale=()=>{//버튼 누를 때마다 리랜더링
    setIsSale(true)
  }
  const unActiveSale=()=>{
    setIsSale(false)
  }
  return (//전체를 보내는 리턴
    <>
      <button onClick={unActiveSale}>전체상품보기</button>
      <button onClick={activeSale}>세일상품보기</button>
      {//스크립트를 넣어야해서 물결 괄호
        products.map((item,index)=>{//만든 배열을 돌면서 각각의 속성을 찾아 리턴해줌.
          return(//product라는 컴포넌트를 사용해서 map 결과물을 리턴
            <Product image={item.image} name={item.name} text={item.text} price={item.price} isNew={item.isNew}/>
          )
        })
      }
    </>
  )
}
