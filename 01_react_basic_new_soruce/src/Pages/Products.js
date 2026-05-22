import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Products() {

  const [idText, setIdText]=useState('') // 입력된 아이디값을 저정할 useState() 설정 

  const navigate = useNavigate() // 동적으로 링크할수있는 useNavigate() 객체생성  (참고 Navigate 객체는 컴포넌트형식으로 사용 <Navigate to="경로"> )
  

  const changeId=(e)=>{ // 아이디를 변경하는 함수 적용 
    setIdText(e.currentTarget.value)
  }

  const submitIdText=(e)=>{
    e.preventDefault(); // form 요소가 submit 될때 모든 컴포넌트가 리랜더링되는것을 방지 
    navigate(`/products/${idText}`) // 해당아이디 경로로 이동  
    setIdText('') // 이동후 input 요소텍스트 초기화 (지워줌)
  }
   

  return (
    <div>
       <div>Products</div>
        <form onSubmit={submitIdText}> {/*Enter 쳐서 form정보가 전달될때 submitIdText() 함수를 실행 */}
            <input type='text' placeholder='상품아이디 입력' style={{width:'200px', height:'25px', margin:'20px', textIndent:'10px'}} value={idText} onChange={changeId}/> 
        </form>
    </div>
  )
}
