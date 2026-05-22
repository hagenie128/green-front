import React, { useEffect, useRef, useState } from 'react';
import styles from './accordionmenu.module.css'
import { gsap } from 'gsap';  

function App27_accordionmenu_source() {  // 기본 컴포넌트 구조 (단축키 rfc - snippets 확장프로그램 )
    const mainMenuList=[ // 메뉴구조를 서브메뉴와 함께 배열 객체로 적용 
        {index:0, name:'Home', pathname:'/', subMenuList:[]},//서브메뉴가 없으면 빈 배열, 없으면 map할 때 에러남
        {index:1, name:'여행정보', pathname:'/', subMenuList:[
            {index:0, name:'여행지정보', pathname:'/'},
            {index:1, name:'여행준비', pathname:'/'},
            {index:2, name:'유용한사이트', pathname:'/'}]},
        {index:2, name:'테마여행', pathname:'/', subMenuList:[
            {index:0, name:'액티비티', pathname:'/'},
            {index:1, name:'싱가폴의밤', pathname:'/'},
            {index:2, name:'미식여행', pathname:'/'},
            {index:3, name:'도심투어', pathname:'/'}]},
        {index:3, name:'이벤트', pathname:'/', subMenuList:[
            {index:0, name:'이벤트', pathname:'/'}]},
        {index:4, name:'고객센터', pathname:'/', subMenuList:[
            {index:0, name:'Q&A', pathname:'/'},
            {index:1, name:'고객의소리', pathname:'/'}]}
    ]
    const [activeIndex,setActiveIndex]=useState(null)
    //재료찾기
    const menuWrap=useRef()
    const menuBtn=useRef()
    const closeBtn=useRef()
    const grayLayer=useRef()
    //기본 셋팅
    useEffect(()=>{//랜더링할때마다 계속 읽을 필요 없으므로
        grayLayer.current.style.display='none'
        menuWrap.current.style.right='-60vw'//메뉴를 오른쪽으로 밀어 보이지 않게, 반응형으로 되어있으므로 vw사용
        menuWrap.current.style.display='none'//오른쪽으로 밀었지만 존재하기 때문에 디스플레이 꺼주기
    },[])
    //메뉴 애니메이션 함수 시작
    const menuOpen=()=>{
        gsap.set('body,html',{overflow:'hidden'})//스크롤 되지 않도록
        grayLayer.current.style.display='block'
        menuWrap.current.style.display='block'
        gsap.to(menuWrap.current,{right:0,duration:0.5,ease:'power1.out'})
    }   
    const menuClose=()=>{
        grayLayer.current.style.display='none'
        gsap.to(menuWrap.current,{right:'-60vw',duration:0.5,ease:'power1.out', onComplete:()=>{
            menuWrap.current.style.display='none'//다 들어간 뒤에 안 보여야하니까 onComplete 사용
            gsap.set('body,html',{overflow:'visible'})//히든의 반대
            //다시 스크롤 되어야하니까 풀어줌
        }})
        setActiveIndex(null)
    }
  return (
    <header>
                <h2 className={styles.mobilemenu_icon} ref={menuBtn} onClick={menuOpen}><img src="images/mobilemenu.png" alt="모바일메뉴"/></h2>
                <nav id={styles.mobilemenu} ref={menuWrap}>                   
                    <div id={styles.mobilemenu_inner}>
                        <p>환영합니다.<br/>로그인 해주세요.
                            <span id={styles.mobileclose_btn} ref={closeBtn} onClick={menuClose}><img src="images/closebtn.png" alt="닫기"/></span>
                        </p>
                        <ul id={styles.mobileloginmenu}>
                            <li>로그인</li>
                            <li>회원가입</li>
                        </ul>
                        <ul id={styles.mobilemenu_list}>                            
                            {/* <li>HOME</li>
                            <li>여행정보
                                <span className={styles.mobile_icon}><img src="images/mobilemenu_icon04.png" alt=""/></span>
                                <ul className={styles.mobilesubmenu_list}>
                                    <li>여행지정보</li>
                                    <li>여행준비</li>
                                    <li>유용한사이트</li>
                                </ul>
                            </li>
                            <li>테마여행
                                <span className={styles.mobile_icon}><img src="images/mobilemenu_icon04.png" alt=""/></span>
                                <ul className={styles.mobilesubmenu_list}>
                                    <li>액티비티</li>
                                    <li>싱가폴의밤</li>
                                    <li>미식여행</li>
                                    <li>도심투어</li>
                                </ul>
                            </li>
                            <li>이벤트
                                <span className={styles.mobile_icon}><img src="images/mobilemenu_icon04.png" alt=""/></span>
                                <ul className={styles.mobilesubmenu_list}>
                                    <li>이벤트</li>
                                </ul>
                            </li>
                            <li>고객센터
                                <span className={styles.mobile_icon}><img src="images/mobilemenu_icon04.png" alt=""/></span>
                                <ul className={styles.mobilesubmenu_list}>
                                    <li>Q&A</li>
                                    <li>고객의소리</li>
                                </ul>
                            </li>  */}
                            {
                                mainMenuList.map((item,index)=>{
                                    return(
                                        <li key={item.index} 
                                        className={`${item.index===activeIndex && styles.selected}`} 
                                        style={item.index===activeIndex? {height:55+(55*item.subMenuList.length)}:{height:55}} 
                                        onClick={()=>{setActiveIndex(item.index!==activeIndex?item.index:null)}}>
                                            {/* 함수를 따로 만들지 않고 삼항연산자를 통해서 조건식을 만들어 같은 메뉴를 눌렀을 때 null을 보내 닫아주기!-리액트의 장점 */}
                                                {
                                                    item.subMenuList.length<1 ?//서브메뉴 유무 확인
                                                    <>{item.name}</>//없을 경우 메인메뉴 이름만 리턴
                                                    :
                                                    //있을 경우 서브메뉴와 함께 리턴
                                                    <>
                                                        {item.name}
                                                        <span className={styles.mobile_icon}><img src="images/mobilemenu_icon04.png" alt=""/></span>
                                                        <ul className={styles.mobilesubmenu_list}>
                                                            {//서브메뉴를 또 돌려야 하니까 물결 괄호
                                                                item.subMenuList.map((item,index)=>{
                                                                    return(//서브메뉴를 돌렸으니까 각각의 서브메뉴가 item이 됨
                                                                        <li key={item.index}>{item.name}</li>
                                                                    )
                                                                })
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
                <div id={styles.mobile_grayLayer} ref={grayLayer} onClick={menuClose}></div>  
                 {/* 배경을 어둡게 해주는 div ( 리엑트에서는 DOM 요소를 동적으로 생성하는 것보다 미리 넣어두는게 좋음 ) */}               
            </header>
  )
}

export default App27_accordionmenu_source; 
