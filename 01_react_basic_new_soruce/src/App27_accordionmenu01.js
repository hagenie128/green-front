import React, { useCallback, useEffect, useRef, useMemo, useState } from 'react';
import styles from './css/accordionmenu.module.css'
import { gsap } from 'gsap';

function App27_accordionmenu01() {  // 기본 컴포넌트 구조 (단축키 rfc - snippets 확장프로그램 )


 const mainMenuList=[  // 메뉴구조를 서브메뉴와 함께 배열 객체로 적용 
    {index:0, name:'Home', pathname:'/', subMenuList:[]},
    {index:1, name:'여행정보', pathname:'/', subMenuList:[{index:0, name:'여행지정보', pathname:'/'},{index:1, name:'여행준비', pathname:'/'},{index:2, name:'유용한사이트', pathname:'/'}]},
    {index:2, name:'테마여행', pathname:'/', subMenuList:[{index:0, name:'액티비티', pathname:'/'},{index:1, name:'싱가폴의밤', pathname:'/'},{index:2, name:'미식여행', pathname:'/'},{index:3, name:'도심투어', pathname:'/'}]},
    {index:3, name:'이벤트', pathname:'/', subMenuList:[{index:0, name:'이벤트', pathname:'/'}]},
    {index:4, name:'고객센터', pathname:'/', subMenuList:[{index:0, name:'Q&A', pathname:'/'},{index:1, name:'고객의소리', pathname:'/'}]}
 ]

 // 각 요소를 useRef() 사용하여 접근 
 const menuWrap=useRef();
 const menuBtn=useRef();
 const closeBtn=useRef();
 const grayLayer=useRef();

// useMemo() 사용하여 리렌더링시 지정한값 계속 유지 
 let selectedMenu=useMemo(()=>(null ), []) // 선택된 메뉴 저장할 변수 ( 초기값 null )
 let closeHeight=useMemo(()=>(55), []);
 let openHeight=useMemo(()=>(null), []);

 
 useEffect(()=>{ // 메뉴전체 초기 좌표 설정 
    grayLayer.current.style.display='none';
    menuWrap.current.style.right='-60vw';
    menuWrap.current.style.display='none'
 }, [])


 const menuOpen=useCallback(()=>{ // useCallback() 사용하여 리렌더링시 실행 최소화 
    gsap.set('body,html', {overflow:'hidden'})  // 메뉴가 열리면 전체 컨텐츠가 스크롤 안되게 막음 
    menuWrap.current.style.display='block'
    grayLayer.current.style.display='block'
    gsap.to(menuWrap.current, {right:0, duration:0.5, ease:'power1.out'})
 }, [])

 const menuClose=useCallback(()=>{
    grayLayer.current.style.display='none'
    gsap.to(menuWrap.current, {right:'-60vw', duration:0.5, ease:'power1.out', onComplete:()=>{
        menuWrap.current.style.display='none'
        gsap.set('body,html', {overflow:'hidden'}) // 메뉴가 닫혀지면 다시 전체 컨텐츠가 스크롤 할수 있게 설정 
    }})

    if(selectedMenu){ // 전체 메뉴가 들어갈때 열려있는 서브메뉴를 닫힘 
        selectedMenu.classList.remove(`${styles.selected}`);
        gsap.set(selectedMenu, {height:closeHeight})
        selectedMenu=null // 서브메뉴가 닫히면 선택된 메뉴가 없다고 설정 
    }
 }, [])

 const menuActivate = useCallback((menu)=>{  

    if(selectedMenu!==null && selectedMenu!==menu){ // 기존에 열려있는 메뉴가 있을때 닫히게 함 
        
        selectedMenu.classList.remove(`${styles.selected}`);
        gsap.to(selectedMenu, {height:closeHeight, duration:0.3, ease:'power1.out'})
        
    }

    if(menu.children.length >0 && selectedMenu!==menu){ // 서브메뉴가 존재하고 기존에 열려있는 메뉴와 다른 메뉴를 클릭했을때 

        selectedMenu=menu;
        selectedMenu.classList.add(`${styles.selected}`)

        openHeight=closeHeight+(closeHeight*selectedMenu.children[1].children.length) // 열리는 높이값을 서브메뉴의 갯수를 활용하여 적용 
        //console.log(openHeight)
        gsap.to(selectedMenu, {height:openHeight, duration:0.3, ease:'power1.out'})
    
    }else if(selectedMenu===menu){ // 기존에 열려있는 메뉴를 다시 클릭했을때 닫히게 
        selectedMenu.classList.remove(`${styles.selected}`);
        gsap.to(selectedMenu, {height:closeHeight, duration:0.3, ease:'power1.out'})
        selectedMenu=null // 중요) 열려있는 메뉴가 없다고 설정 
    }   
    
 }, [])



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
                            {
                                mainMenuList.map((item)=>(
                                    <li key={item.index}  onClick={(e)=>{                                     
                                            menuActivate(e.currentTarget)                                       
                                    }}>
                                        {item.subMenuList.length < 1 ?  // 서브메뉴가 존재하지 않을때 설정 
                                            <>  {/*중요: 최상위 테그 프레그먼트 사용 */}
                                                {item.name} 
                                            </>
                                            :
                                            <>   {/*서브메뉴가 존재할때 설정 */}
                                                {item.name}

                                                <span className={styles.mobile_icon}><img src="images/mobilemenu_icon04.png" alt=""/></span>
                                                <ul className={styles.mobilesubmenu_list}>
                                                    {
                                                        item.subMenuList.map((item)=>( // 중요: 전체 메인메뉴안에 있는 서브메뉴리스트에 있는 요소를 map() 으로 돌려서 생성 
                                                            <li key={item.index}>{item.name}</li>
                                                        ))
                                                    }
                                                    {/* <li>여행지정보</li>
                                                    <li>여행준비</li>
                                                    <li>유용한사이트</li> */}
                                                </ul>

                                            </>

                                        }
                                    </li>
                                ))
                            }
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
                            </li> */}
                        </ul>
                    </div>
                </nav>
                <div id={styles.mobile_grayLayer} ref={grayLayer}></div>
                 {/* 배경을 어둡게 해주는 div ( 리엑트에서는 DOM 요소를 동적으로 생성하는 것보다 미리 넣어두는게 좋음 ) */}
            </header>
  )
}

export default App27_accordionmenu01; 
