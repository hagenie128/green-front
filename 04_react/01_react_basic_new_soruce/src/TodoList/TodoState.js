import React from 'react'
import Style from './css/TodoState.module.css'
import { v4 as uuidv4 } from 'uuid';

export default function TodoState({categorys, category, onChangeCategory}) {

 

  return (
    
    <section id={Style.todostatus}>
        <ul id={Style.todostatus_list}>

          {/*         
            <li><button className={`${Style.status_btn} ${Style.selected}`}>all</button></li>   //중복클래스 적용 - 카테고리 활성화 
            <li><button className={Style.status_btn}>active</button></li>
            <li><button className={Style.status_btn}>complete</button></li>
          */}

          {
            categorys.map((item)=>{
              return(
                <li key={uuidv4()}><button className={`${Style.status_btn} ${item===category && Style.selected}`} onClick={()=>{
                  onChangeCategory(item)
                }}>{item}</button></li>
              )
            })
          }

        </ul>
    </section>

  )
}
