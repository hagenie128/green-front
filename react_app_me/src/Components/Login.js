import React, { useState } from 'react'

export default function Login() {
    const [userId,setUserId]=useState('')
    const [userPass,setUserPass]=useState('')
  return (
    <form className='login'>
        <p>
            아이디 : <input type='text' name='user_id' value={userId} onChange={(e)=>{
                setUserId(e.currentTarget.value)
            }}/>
        </p>
        <p>
            비밀번호 : <input type='password' name='user_pass' value={userPass} onChange={(e)=>{
                setUserPass(e.currentTarget.value)
            }}/>
        </p>
    </form>
  )
}
