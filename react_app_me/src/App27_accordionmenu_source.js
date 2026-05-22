import React, { useEffect, useRef, useState } from 'react';
import styles from './accordionmenu.module.css'
import { gsap } from 'gsap';  

function App27_accordionmenu_source() {  // 기본 컴포넌트 구조 (단축키 rfc - snippets 확장프로그램 )
    const mainMenuList=[
        {"index":0,"name":"Home","path":'/',"subMenuList":[]},
        {"index":1,"name":"여행정보","path":'/',"subMenuList":[
            {"index":0,"name":"여행지정보","path":'/'},
            {"index":1,"name":"여행준비","path":'/'},
            {"index":2,"name":"유용한 사이트","path":'/'}
        ]},
        {"index":2,"name":"테마여행","path":'/',"subMenuList":[
            {"index":0,"name":"액티비티","path":'/'},
            {"index":1,"name":"싱가폴의 밤","path":'/'},
            {"index":2,"name":"미식여행","path":'/'},
            {"index":3,"name":"도심투어","path":'/'}
        ]},
        {"index":3,"name":"이벤트","path":'/',"subMenuList":[
            {"index":0,"name":"이벤트","path":'/'}
        ]},
        {"index":4,"name":"고객센터","path":'/',"subMenuList":[
            {"index":0,"name":"Q&A","path":'/'},
            {"index":1,"name":"고객의소리","path":'/'},
        ]}
    ]
    const [activeIndex,setActiveIndex]=useState(null)
    const menuWrap=useRef()
    const grayLayer=useRef()
    const closeBtn=useRef()
    const menuBtn=useRef()

    useEffect(()=>{
        grayLayer.current.style.display='none'
        menuWrap.current.style.right='-60vw'
        menuWrap.current.style.display='none'
    },[])
    const openMenu=()=>{
        gsap.set('body,html',{overflow:'hidden'})
        grayLayer.current.style.display='block'
        menuWrap.current.style.display='block'
        gsap.to(menuWrap.current,{right:0,duration:0.5,ease:'power1.out'})
    }
    const closeMenu=()=>{
        grayLayer.current.style.display='none'
        gsap.to(menuWrap.current,{right:'-60vw',duration:0.5,ease:'power1.out', onComplete:()=>{
            menuWrap.current.style.display='none'
            gsap.set('body,html',{overflow:'visible'})
        }})

    }
  return (
    <header>
                <h2 className={styles.mobilemenu_icon} ref={menuBtn} onClick={openMenu}><img src="images/mobilemenu.png" alt="모바일메뉴"/></h2>
                <nav id={styles.mobilemenu} ref={menuWrap}>                   
                    <div id={styles.mobilemenu_inner}>
                        <p>환영합니다.<br/>로그인 해주세요.
                            <span id={styles.mobileclose_btn} ref={closeBtn} onClick={closeMenu}><img src="images/closebtn.png" alt="닫기"/></span>
                        </p>
                        <ul id={styles.mobileloginmenu}>
                            <li>로그인</li>
                            <li>회원가입</li>
                        </ul>
                        <ul id={styles.mobilemenu_list}>                            
                        {
                            mainMenuList.map((item,index)=>{
                                return(
                                    <li key={item.index} className={`${activeIndex===item.index && styles.selected}`}
                                    style={activeIndex===item.index? {height:55+(55*item.subMenuList.length)}:{height:55}}
                                    onClick={()=>{setActiveIndex(activeIndex===item.index? null:item.index)}} >
                                        {
                                            item.subMenuList.length<1?
                                            <>{item.name}</>
                                            :
                                            <>
                                            {item.name}
                                            <span className={styles.mobile_icon}><img src="images/mobilemenu_icon04.png" alt=""/></span>
                                            <ul className={styles.mobilesubmenu_list}>
                                                {
                                                    item.subMenuList.map((item,index)=>(<li key={item.index}>{item.name}</li>))
                                                }
                                            </ul>
                                            </>
                                        }
                                    </li>
                                )
                            })
                        }
                        </ul>
                    </div>
                </nav>
                <div id={styles.mobile_grayLayer} ref={grayLayer} onClick={closeMenu}></div>  
                 {/* 배경을 어둡게 해주는 div ( 리엑트에서는 DOM 요소를 동적으로 생성하는 것보다 미리 넣어두는게 좋음 ) */}               
            </header>
  )
}

export default App27_accordionmenu_source; 
