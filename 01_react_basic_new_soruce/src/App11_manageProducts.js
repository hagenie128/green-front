import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Product from './Components/Product' //  Product 컴포넌트 적용 

export default function App11_manageProducts() {


  const [products, setProducts] = useState([]) // 상품정보를 관리할 useState() 사용  ( 상품정보는 배열행태로 초기값 지정 )    

  const [newCheck, setNewCheck] = useState(false)  // 체크박스를 사용하여 신상품정보 출력을 관리할 useState() 사용 

  const changeNewCheck=()=>{ 
    setNewCheck((prev)=> !prev) // 체크박스의 체크값이 변할때 체크상태값을 반대로 지정함 
  }


  const getNewProducts=(products)=>{ // 신상품 체크상태에 따라 신상품만 필터링하는 함수적용 
    if(newCheck===true){
      return (products.filter((item)=>(item.isNew===true))) // 신상품 체크상태가 true 경우 각 상품의 isNew 속성값이 true 상품만 리턴 
    }else{
      return (products) // 신상품 체크상태가 false 경우 모든 상품을 리턴 
    }
  }

  const newProducts=getNewProducts(products) // 모든상품을 매개변수로 전달하여 새로운상품만 필터링하는 함수실행 



  const changeProduct=()=>{ // 상품정보를 변경하는 함수 실행 
    
    let name=prompt("변경할 상품이름을 입력하세요")    
    let text=prompt("변경할 상품내용을 입력하세요")
    let price=prompt("변경할 상품가격을 입력하세요")
    let isNew=prompt("신상품여부를 입력하세요 예) true, false")
    isNew=isNew.startsWith('true') 
    // isNew 값에서 앞부분부터 확인하면 문자열 "true" 값이 있으면 true 값으로 그렇지 않으면 false로 반환 
    //(문자열 "true", "false" 값을 논리값 true, false 타입으로 바꿀때 사용)

    setProducts((prev)=>{ // 데이터객체들의 내용을 변경하는것이기 때문에 setProducts() 함수를 활용하여 객체변경 
      return (
        prev.map((item)=>{
          if(item.name===name){  // 기존 배열로 저장된 상품정보를 map() 함수를 이용하여 배열안에 객체중 입력한 상품명과 같은 상품만 상품정보 변경
            return ({...item, text:text, price:price, isNew:isNew}) // ... 연산자를 사용하여 해당객체속성들을 불러온 다음 해당속성을 변경 - 배열/객체 불변성 원리
          }else{
            return ({...item}) // 입력한 상품명과 같지않은 상품들은 기존 객체속성 그대로 전달 
          }
        })
      )
    })
  }


  const addProduct=()=>{ // 상품 추가하는 함수 실행 

    let image=prompt("추가할 상품의 이미지경로를 입력하세요")
    let name=prompt("추가할 상품의 이름을 입력하세요")
    let text=prompt("추가할 상품의 내용을 입력하세요")
    let price=prompt("추가할 상품의 가격을 입력하세요")
    let isNew=prompt("신상품여부를 입력하세요 예) true, false")
    
    isNew=isNew.startsWith("true") 

    setProducts((prev)=>{
      return (
        [...prev, {image, name, text, price, isNew}]  // 기존배열(... 연산자사용 )에 새로운 객체 추가 
      )
    })
  }

  const removeProduct=()=>{

    let name=prompt("삭제할 상품의 이름을 입력하세요")

    // setProducts((prev)=>{  // filter() 함수를 사용하여 기존 배열의 객체들중에서 삭제할 상품명과 같지 않은 객체들만 보여줌  
    //   return (
    //     prev.filter((item)=>{
    //       if(item.name!==name){
    //         return ( {...item} ) 
    //       }        
    //     })
    //   )
    // })

    setProducts((prev)=>(prev.filter((item)=>item.name!==name)))  // 함축식 표현  ( filter구문안에서 if구문을 권장하지 않음 )
  }

 /* 중요

  특정 컴포넌트내에 상품변경, 추가, 삭제 명령을 직업넣어주면 다른 컴포넌트에서 전역으로 사용하기 불편하고 실행할 명령들이 효율적인 관리가 어렵다. 
  다음예제 useReducer() 함수를 사용하여 자주쓰는 명령을 외부에 저장하고 컴포넌트내에서는 명령만 전달하는 형식을 씀  
  
*/


  useEffect(()=>{
    /* 
    useEffect() 사용하여 반복적으로 데이터를 로드하지 않게 설정 
    - useEffect 사용하지 않으면 useState 상태가 변화하면서 전체 컴포넌트가 다시 로드되고 axios 명령이 다시 반복실행되는 네트워크 에러 발생  
    */
    axios.get('./data/products.json').then((res)=>{
      // axios 라이브러리를 사용하여 상품정보가 저장된 products.json 로드함
      setProducts(res.data) // json 파일로 불러들인 상품정보 data 값을 products 변수값에 배열형태로 저장 
    })
  },[]) // [] 아무값도 넣지 않으면 한번만 로드

  return (

    <>

        <div className="newCheck" style={{width:'360px', height:'30px', margin:'12px auto', fontSize:'14px'} }> {/*인라인 스타일 적용 - 객체구조 */ }
            
           신상품 <input type="checkbox" value={newCheck} onChange={changeNewCheck} style={{position:'relative', top:'1px'}}/> 
            {/* 체크시 신상품 상태값을 변경하는 함수실행*/} 
        
        </div> 

      {
        
        // 신상품만 필터링된 상품들을 출력 
        // 앞부분에서 setProduct() 함수를 활용하여 객체가 변경되었기 때문에 다시 랜더링되면서 변경된 객체들의 정보를 다시 상품정보를 컴포넌트로 출력
        newProducts.map((item)=>{
          return (
            <Product image={item.image} name={item.name} text={item.text} price={item.price} isNew={item.isNew}/>
             //상품이 많을때 Product 컴포넌트를 복사하면 상품정보데이터 관리가 불편 - axios 활용하여 외부데이터를 불러들임   
             // 각 배열에 저장된 객체 속성값을 props값으로 적용하여 상품정보를 보여줌  
          )
        })
      }

      <div style={{width:'300px', height:'auto', margin:'30px auto'}}>
      <button onClick={changeProduct}>상품수정</button> <button onClick={addProduct}>상품추가</button> <button onClick={removeProduct}>상품삭제</button> 
        {/* 각 상품수정, 상품추가, 상품삭제 버튼들을 추가하고 onClick 이벤트로 각 해당 함수 실행*/ }
       </div>      
    </>
  )
}
