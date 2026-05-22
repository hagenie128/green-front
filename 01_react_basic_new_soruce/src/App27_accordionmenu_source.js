import React, { useEffect, useRef, useState } from 'react';
import styles from './css/accordionmenu.module.css'
import { gsap } from 'gsap';  

function App27_accordionmenu_source() {  // 기본 컴포넌트 구조 (단축키 rfc - snippets 확장프로그램 )
 
  return (
    <header>
                <h2 className={styles.mobilemenu_icon} ><img src="images/mobilemenu.png" alt="모바일메뉴"/></h2>
                <nav id={styles.mobilemenu} >                   
                    <div id={styles.mobilemenu_inner}>
                        <p>환영합니다.<br/>로그인 해주세요.
                            <span id={styles.mobileclose_btn} ><img src="images/closebtn.png" alt="닫기"/></span>
                        </p>
                        <ul id={styles.mobileloginmenu}>
                            <li>로그인</li>
                            <li>회원가입</li>
                        </ul>
                        <ul id={styles.mobilemenu_list}>                            
                            <li>HOME</li>
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
                            </li> 
                        </ul>
                    </div>
                </nav>
                <div id={styles.mobile_grayLayer}></div>  
                 {/* 배경을 어둡게 해주는 div ( 리엑트에서는 DOM 요소를 동적으로 생성하는 것보다 미리 넣어두는게 좋음 ) */}               
            </header>
  )
}

export default App27_accordionmenu_source; 
