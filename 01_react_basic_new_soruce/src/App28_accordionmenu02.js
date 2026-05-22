import React, { useEffect, useRef, useState } from 'react';
import styles from './css/accordionmenu.module.css'
import { gsap } from 'gsap';  

function App28_accordionmenu02() {  // 기본 컴포넌트 구조 (단축키 rfc - snippets 확장프로그램 )


 const mainMenuList=[ // 메뉴구조를 서브메뉴와 함께 배열 객체로 적용 
    {index:0, name:'Home', pathname:'/', subMenuList:[]},
    {index:1, name:'여행정보', pathname:'/', subMenuList:[{index:0, name:'여행지정보', pathname:'/'},{index:1, name:'여행준비', pathname:'/'},{index:2, name:'유용한사이트', pathname:'/'}]},
    {index:2, name:'테마여행', pathname:'/', subMenuList:[{index:0, name:'액티비티', pathname:'/'},{index:1, name:'싱가폴의밤', pathname:'/'},{index:2, name:'미식여행', pathname:'/'},{index:3, name:'도심투어', pathname:'/'}]},
    {index:3, name:'이벤트', pathname:'/', subMenuList:[{index:0, name:'이벤트', pathname:'/'}]},
    {index:4, name:'고객센터', pathname:'/', subMenuList:[{index:0, name:'Q&A', pathname:'/'},{index:1, name:'고객의소리', pathname:'/'}]}
 ]

 const [activeIndex, setActiveIndex] = useState(null)  // 메뉴를 클릭했을때 순번을 저장하는 useState() 설정 

// 각 요소를 useRef() 사용하여 접근 
 const menuWrap=useRef();
 const menuBtn=useRef();
 const closeBtn=useRef();
 const grayLayer=useRef();

//  let selectedMenu=null
//  let closeHeight=55;
//  let openHeight=null;

 
 useEffect(()=>{  // 메뉴전체 초기 좌표 설정 
    grayLayer.current.style.display='none';
    menuWrap.current.style.right='-60vw';
    menuWrap.current.style.display='none'
 }, [])


 const menuOpen=()=>{ // 메뉴 전체가 보여지는 에니메이션 함수 
    gsap.set('body,html', {overflow:'hidden'})  // 메뉴가 열리면 전체 컨텐츠가 스크롤 안되게 막음 
    menuWrap.current.style.display='block'
    grayLayer.current.style.display='block'
    gsap.to(menuWrap.current, {right:0, duration:0.5, ease:'power1.out'})
 }

 const menuClose=()=>{ // 메뉴 전체가 다시 안보여지게 에니메이션 함수
    grayLayer.current.style.display='none'
    gsap.to(menuWrap.current, {right:'-60vw', duration:0.5, ease:'power1.out', onComplete:()=>{
        menuWrap.current.style.display='none'
        gsap.set('body,html', {overflow:'visible'})  // 메뉴가 닫혀지면 다시 전체 컨텐츠가 스크롤 할수 있게 설정 
    }})

    setActiveIndex(null) // 서브메뉴가 닫히면 선택된 메뉴가 없다고 setactiveIndex() 설정 
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
                            {
                                mainMenuList.map((item)=>(
                                    <li key={item.index} className={`${item.index===activeIndex && styles.selected}`} style={item.index===activeIndex ? {height:55+(55*item.subMenuList.length)} : {height:55}} onClick={()=>{
                                                                   {/* 중요: 클릭한 순번과 같은 메뉴는 활성화하는 selected 클래서 적용하고 높이값을 서브메뉴의 갯수에 따라 높이설정 */} 
                                          setActiveIndex(item.index!==activeIndex ? item.index : null)
                                    {/* 기존에 선택된 순번과 현제 클릭한 순번이 같지 않을때만 다른 서브메뉴을 열고 같을때는 null 값을 지정하여 서브메뉴가 닫히도록 설정 */}
                                    }}>
                                        {item.subMenuList.length < 1 ?  // 서브메뉴가 존재하지 않을때 설정 
                                            <> {/*중요: 최상위 테그 프레그먼트 사용 */}
                                                {item.name}
                                            </>
                                            :
                                            <> {/*서브메뉴가 존재할때 설정 */}
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

export default App28_accordionmenu02; 
