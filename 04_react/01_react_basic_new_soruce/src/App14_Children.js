import React from 'react'
import Parent from './Components/Parent'

export default function App14_Children() {
  return (
      <Parent>
        <img src='./images/visual_img.jpg' alt=''/>{/* 해당 컴포넌트내에 자식객체로 전달 */}
      </Parent>
  )
}

