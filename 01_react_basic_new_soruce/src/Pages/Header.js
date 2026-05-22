import React, { useMemo } from 'react'
import Style from './css/Header.module.css'
import { Link } from 'react-router-dom'

export default function Header() {

  
  const menus=useMemo(()=>{ // useMemo() 사용하여 컴포넌트가 리랜더링 될때 다시 초기화되는 것을 방지 
    return (
        [ // 각 메뉴 속성들을 객체 배열로 정의 
            {id:'001', text:'Home', path:'/'},
            {id:'002', text:'Brand', path:'/brand'},
            {id:'003', text:'Products', path:'/products'}
        ]
    )
  },[])
  
 
  return (
    <header>
        <nav id={Style.menu}>
            <ul id={Style.menu_list}>
                {/* <li><Link to='/'>Home</Link></li>
                <li><Link to='/brand'>Brand</Link></li>
                <li><Link to='/products'>Products</Link></li> */}
                {
                    menus.map((item)=>{  // map() 사용하여 메뉴들을 출력 
                        return (
                            <li key={item.id}><Link to={item.path}>{item.text}</Link></li>
                        )
                    })
                }
            </ul>
        </nav>
    </header>
  )
}
