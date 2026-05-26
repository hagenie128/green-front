
/*


userReducer() 함수 - 자주쓰이는 객체나 배열들의 관리 ( 수정 , 추가 , 삭제 등 ) 명령들을  Reducer() 함수를 활용하여 외부로 빼서 다양한 컴포넌트에서 적용할수 있는 방식


형식 

const [객체, dispatch] = userReducer(reducer함수명, 초기데이터값)

dispatch({전달명령타입, 변수})  // 컴포넌트 내에서의 전달명령함수


// 외부에서 reducer() 함수 적용 

export default function reducer함수명(객체, action){  //action : 전달명령을 받을 매개변수    

    switch (action.type) {

        case '전달명령타입1': {
            const {변수} = action;
            return (
                실행결과 
            )         
        }
        case '전달명령타입2': {
            const {변수} = action;
            return (
               실행결과
            )           
        }        
        default: {
            throw Error(`알수없는 액션타입 입니다:${action.type}`)
        }
    }
}

*/



import axios from 'axios'
import React, { useEffect, useReducer, useState } from 'react'
import Product from './Components/Product' //  Product 컴포넌트 적용 
import productsReducer from './Reducer/productsReducer' // 외부 reducer 함수 적용 

export default function App12_useReducer() {

  /*
  const [products, setProducts] = useState([])  
  
  useState() 대신에 useReducer() 사용 
   - useStage() 의 setProducts 함수는 정의된 컴포넌트 내부에서만 사용가능하지만, 
    복잡한 명령들을 반복적으로 사용할때는 실행명령을 외부함수로 따로 빼서 별도로 반복적으로 사용할수있는 useReducer() 함수를 사용한다.  

     Reducer 객체생성   const [객체명, 전달함수] = userReducer(처리함수, 초기데이터값)  

  */

  const [products,  dispatch] = useReducer(productsReducer, []) // 초기값 빈배열 설정 



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

    dispatch({type:'update', name, text, price, isNew})    
    // 상품정보를 변경하는 명령을 바로 처리하지 않고 dispatch() 함수를 이용하여 외부에서 명령을 실행하는 함수 (Reducer함수) 로 명령타입과 변수들을 전달 
   
  }


  const addProduct=()=>{ // 상품 추가하는 함수 실행 

    let image=prompt("추가할 상품의 이미지경로를 입력하세요")
    let name=prompt("추가할 상품의 이름을 입력하세요")
    let text=prompt("추가할 상품의 내용을 입력하세요")
    let price=prompt("추가할 상품의 가격을 입력하세요")
    let isNew=prompt("신상품여부를 입력하세요 예) true, false")    
    isNew=isNew.startsWith("true") 

    dispatch({type:'add', image, name, text, price, isNew})
  }

  const removeProduct=()=>{

    let name=prompt("삭제할 상품의 이름을 입력하세요")

    dispatch({type:'remove', name})

   
  }



  useEffect(()=>{
    /* 
    useEffect() 사용하여 반복적으로 데이터를 로드하지 않게 설정 
    - useEffect 사용하지 않으면 useState 상태가 변화하면서 전체 컴포넌트가 다시 로드되고 axios 명령이 다시 반복실행되는 네트워크 에러 발생  
    */
    axios.get('./data/products.json').then((res)=>{
      // axios 라이브러리를 사용하여 상품정보가 저장된 products.json 로드함

      dispatch({type:'load', data:res.data})  // 중요) useReducer() 사용시 처음 상품들을 로드할때도 반드시 dispatch() 전달함수를 이용해서 실행

     
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
