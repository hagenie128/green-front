
/*
작업개요 

React 에서는 form 요소에서 입력값이 변경될때 useState() 함수를 사용하여 입력된 정보를 상태값으로 관리할 수 있다. 

( 개발자 도구 F12 에서 그냥 정보를 입력하면 state 값이 볂하지 않음, useState() 함수를 사용하여 값을 변경하면 state 값이 변함 )

*/

import React, { useState } from 'react'

export default function Login() {


 // react 내부스스타일 적용은 객체형태로 적용 

 const formStyle={
    width:'600px', 
    height:'auto', 
    margin:'100px auto', 
    textAlign:'center', 
    padding:'16px', 
    boxSizing:'border-box', 
    backgroundColor:'#f7f7f7', 
    border:'solid 1px #d8d8d8'
  }

  const [userId, setUserId] = useState(''); // 이름 정보를 관리하는 useState() 함수 설정 
  const [userPassword, setUserPassword] = useState(''); // 이메일 정보를 관리하는 useState() 함수 설정 

  const changeInfo=(e)=>{
    e.preventDefault() // 버튼을 누를때 마다 페이지 리로딩 방지 

  }

  return (
    <form id="login" style={formStyle} onSubmit={changeInfo}>
        <p> 
            아이디 : <input type='text' name='userId' value={userId} onChange={(e)=>{
                setUserId(e.currentTarget.value) // 입력값이 변할때 setUserId() 함수 사용하여 아이디 변경
            }}/>
             &nbsp;비밀번호: <input type='password' name='userPassword' value={userPassword} onChange={(e)=>{
                setUserPassword(e.currentTarget.value)  // 입력값이 변할때 setUserPassword() 함수 사용하여 비밀번호 변경
            }}/>  
             &nbsp;<button>Login</button>
        </p>           
    </form>
  )
}
