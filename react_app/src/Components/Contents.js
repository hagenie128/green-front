import React from 'react'
import './css/Contents.css'

export default function Contents({title,text}) {
    // 순수 자바스크립트 문법
  return (
    // jsx 문법 구간
    //변수는 {}로 닫아줘야함
    <section className='contents'>
        <h2 className='contents_title'>{title}</h2>
        <p className='contents_text'>{text}</p>
    </section>
  )
}
