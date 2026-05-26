import React from 'react'
import './css/Contents.css'

export default function Contents({title,text}) {
  return (
    <section className='contents'>
        <h2 className='contents_title'>{title}</h2>
        <p className='contents_text'>{text}</p>
    </section>
  )
}
