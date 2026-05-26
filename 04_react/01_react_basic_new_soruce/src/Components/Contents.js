// Contents 컴포넌트 제작 

import React from 'react'
import './css/Contents.css'

export default function Contents({title, text}) {

 /* props 속성값을 각 매개변수로 구조분해 사용

    function Contents(props){
       return (
       <section id="contents">
            <h2 id="contents_title">
                {props.title}
            </h2>
            <p id="contents_text">
                {props.text}
            </p>
        </section>
        
       )
    }

    let { title, text } = { props.title, props.text }

    */    

  return (
    <section id="contents">         

        <h2 id="contents_title">
            {title}
        </h2>
        <p id="contents_text">
            {text}
        </p>

    </section>
  )
}
