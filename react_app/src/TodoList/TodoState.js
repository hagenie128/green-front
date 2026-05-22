import React from 'react'
import style from './css/TodoState.module.css'

export default function TodoState({categorys,category,changeCategory}) {
  return (
    <section id={style.todostatus}>
        <ul id={style.todostatus_list}>
                      {/* css모듈화 중복클래스 넣는 법 */}
            {/* <li><button className={`${style.status_btn} ${style.selected}`}>ALL</button></li>
            <li><button className={style.status_btn}>Active</button></li>
            <li><button className={style.status_btn}>Complete</button></li> */}
            {
            categorys.map((item,index)=>{//맵으로 반복하여 돌리고 만듦
              return(
                <li><button className={`${style.status_btn} ${item===category && style.selected}`} onClick={()=>{
                  changeCategory(item)//선택된 애만 클래스 넣어주면 되니까 삼항연산자 대신에 &&로
                }}>{item}</button></li>
                //이름은 아이템
              )
            })
          }
        </ul>
    </section>
  )
}
