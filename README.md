# green-front

프론트엔드 수업 자료와 React 연습 프로젝트를 주제별로 정리한 저장소입니다.

## 폴더 구조

```text
green-front
├─ 01_javascript_basics      JavaScript 기본 문법, 함수, 배열 예제
├─ 02_browser_dom            DOM, Event, BOM, Ajax 예제
├─ 03_animation_responsive   GSAP 애니메이션, 인터랙션 UI, 반응형 웹 예제
├─ 04_react                  React 기초, 개인 연습, Redux 예제 프로젝트
├─ 05_design_figma           Figma 디자인 실습 파일
└─ 99_docs                   북마크, 노트 양식 등 참고 문서
```

## 예제별 학습 내용

### 01_javascript_basics

JavaScript 문법을 처음부터 정리하는 예제 모음입니다. HTML 파일을 브라우저에서 열거나 코드와 콘솔 출력을 함께 보면서 학습합니다.

| 경로 | 배울 수 있는 내용 |
| --- | --- |
| `01_javascript_basics/01_JS_Core` | 변수 선언, 자료형, 템플릿 리터럴, 연산자, 조건문, switch, for/while 반복문 |
| `01_javascript_basics/02_Function_01` | 함수 선언식, 함수 호출, 매개변수, return, 기본 함수 흐름 |
| `01_javascript_basics/03_Function_02` | 함수 활용 예제, 값 전달, 조건/반복문과 함수 조합 |
| `01_javascript_basics/16_Array` | 배열 생성, 배열 값 접근, 배열 메서드 기초, 배열 데이터 처리 |

### 02_browser_dom

브라우저에서 JavaScript가 HTML 요소와 사용자 동작을 다루는 방법을 배우는 예제입니다.

| 경로 | 배울 수 있는 내용 |
| --- | --- |
| `02_browser_dom/04_DOM` | DOM 요소 선택, 부모/자식/형제 탐색, 요소 생성, 이동, 복제, 삭제 |
| `02_browser_dom/05_Event` | 클릭 등 이벤트 연결, 이벤트 핸들러, 사용자 동작에 따른 화면 변경 |
| `02_browser_dom/06_headers_label` | table headers, form label 등 HTML 구조와 접근성 기초 |
| `02_browser_dom/07_BOM_min` | setInterval, window/location, offset/scroll/mouse 좌표, 브라우저 객체 사용 |
| `02_browser_dom/15_Ajax` | 비동기 요청, 외부 HTML/data 불러오기, 요청 성공 후 화면 반영 |

### 03_animation_responsive

움직임이 있는 UI와 반응형 레이아웃을 만드는 예제입니다. CSS, JavaScript, GSAP를 함께 사용합니다.

| 경로 | 배울 수 있는 내용 |
| --- | --- |
| `03_animation_responsive/08_Animation_gsap` | GSAP 기본 애니메이션, 이미지 이동, fade, slide 메뉴 |
| `03_animation_responsive/08_Animation_gsap_min` | GSAP 핵심 예제를 축약해서 복습 |
| `03_animation_responsive/08_Web_30` | HTML5 레이아웃, CSS 효과, 웹폰트, 갤러리, 메뉴, 비디오 등 UI 실습 |
| `03_animation_responsive/09_Interaction_UI_gsap_min` | 탭, 툴팁, 아코디언, 퀵메뉴, 스크롤 인터랙션, ScrollTrigger |
| `03_animation_responsive/09_Interaction_UI_gsap_min (1)` | 인터랙션 UI 예제 복습/확장 자료 |
| `03_animation_responsive/09_Interaction_UI_gsap_min (1) (2)` | 인터랙션 UI와 일부 배열 예제 복습 자료 |
| `03_animation_responsive/09_Responsive_Web_min` | HTML5 시맨틱 구조, 유동 그리드, 반응형 이미지/영상, media query, flex, grid |

### 04_react

React 프로젝트와 개인 연습 결과물을 모아둔 폴더입니다. 각 프로젝트 폴더에서 `npm install` 후 `npm start`로 실행합니다.

| 경로 | 배울 수 있는 내용 |
| --- | --- |
| `04_react/01_react_basic_new_soruce` | 컴포넌트, props, event, useState, useEffect, useReducer, Context, Router, useRef, TodoList |
| `04_react/react_app` | React 수업 내용을 직접 따라 만든 연습 프로젝트와 라우터/상태 관리 실습 |
| `04_react/react_app_me` | 개인 복습용 React 프로젝트, 상품 목록, Context, TodoList, Router 실습 |
| `04_react/react_app_me2` | React 기초를 한 번 더 반복한 개인 연습 프로젝트 |
| `04_react/redux-ex` | Redux Toolkit store/slice 구조, Provider 연결, useSelector/useDispatch, 카운터 상태 변경 |

### 05_design_figma

Figma 디자인 실습 파일을 모아둔 폴더입니다.

| 경로 | 배울 수 있는 내용 |
| --- | --- |
| `05_design_figma/00_Figma_final_new` | 도형, 펜툴, 색상, 그라디언트, 스타일, 컴포넌트, 오토레이아웃, 프로토타입, 모바일 UI |

### 99_docs

수업과 작업에 참고할 문서 자료입니다.

| 경로 | 배울 수 있는 내용 |
| --- | --- |
| `99_docs` | 북마크, 노트 양식 등 보조 자료 관리 |

## 주요 예제 파일별 학습 포인트

아래 표는 실제로 열어보며 학습하기 좋은 예제 파일 중심으로 정리했습니다. 표의 `위치`는 각 큰 제목의 상위 폴더를 기준으로 짧게 적었습니다. `_source`가 붙은 파일은 완성본과 비교하거나 수업용 원본 코드로 참고하면 좋습니다.

### JavaScript 기본

| 위치 | 파일 | 배울 수 있는 내용 |
| --- | --- | --- |
| `01_JS_Core/01_var_let_const` | `01_var_data.html` | `var` 선언과 기본 자료형 확인 |
| `01_JS_Core/01_var_let_const` | `02_let_const.html` | `let`, `const` 차이와 재할당 규칙 |
| `01_JS_Core/01_var_let_const` | `02_let_data.html` | 변수에 저장되는 데이터 타입 |
| `01_JS_Core/01_var_let_const` | `04_Symbol().html` | `Symbol` 타입의 특징 |
| `01_JS_Core/01_var_let_const` | `05_template_literal.html` | 템플릿 리터럴과 문자열 삽입 |
| `01_JS_Core/02_operator` | `01_operator.html` | 기본 산술/대입 연산자 |
| `01_JS_Core/02_operator` | `02_operator.html` | 비교 연산자 |
| `01_JS_Core/02_operator` | `03_operator.html` | 논리 연산자 |
| `01_JS_Core/02_operator` | `04_operator.html` | 증감/복합 연산자 |
| `01_JS_Core/02_operator` | `05_operator.html` | 조건식과 연산 흐름 |
| `01_JS_Core/02_operator` | `06_operator.html` | 연산자 종합 예제 |
| `01_JS_Core/03_if_switch` | `01_if.html` | `if` 조건문 기초 |
| `01_JS_Core/03_if_switch` | `02_if.html` | 조건 분기 확장 |
| `01_JS_Core/03_if_switch` | `03_if.html` | `if else` 흐름 |
| `01_JS_Core/03_if_switch` | `04_if.html` | 여러 조건 처리 |
| `01_JS_Core/03_if_switch` | `05_if.html` | 조건문 실습 문제 |
| `01_JS_Core/03_if_switch` | `06_switch.html` | `switch` 문법 |
| `01_JS_Core/03_if_switch` | `07_switch.html` | `switch` 활용 예제 |
| `01_JS_Core/04_for_while` | `01_for.html` | `for` 반복문 기초 |
| `01_JS_Core/04_for_while` | `02_for.html` | 반복 횟수와 조건 제어 |
| `01_JS_Core/04_for_while` | `03_for.html` | 중첩/응용 반복문 |
| `01_JS_Core/04_for_while` | `04_while.html` | `while` 반복문 기초 |
| `01_JS_Core/04_for_while` | `05_while.html` | `while` 조건 제어 |
| `01_JS_Core/04_for_while` | `06_while.html` | 반복문 응용 |
| `01_JS_Core/04_for_while` | `07_while.html` | 반복 흐름 제어 |
| `01_JS_Core/04_for_while` | `08_while.html` | 반복문 종합 실습 |
| `02_Function_01` | `01_function.html` | 함수 선언과 호출 |
| `02_Function_01` | `02_function.html` | 매개변수 사용 |
| `02_Function_01` | `03_function.html` | 반환값 사용 |
| `02_Function_01` | `04_function.html` | 함수 기초 종합 |
| `03_Function_02` | `01_function.html` | 함수 응용 시작 |
| `03_Function_02` | `02_function.html` | 조건문과 함수 조합 |
| `03_Function_02` | `03_function.html` | 반복문과 함수 조합 |
| `03_Function_02` | `04_function.html` | 함수로 코드 분리 |
| `03_Function_02` | `05_function.html` | 함수 응용 종합 |
| `16_Array` | `03_Array()_01.html` | 배열 생성과 인덱스 접근 |
| `16_Array` | `03_Array()_02.html` | 배열 값 변경과 추가 |
| `16_Array` | `03_Array()_03.html` | 배열 순회 |
| `16_Array` | `03_Array()_04.html` | 배열 메서드 활용 |

### DOM, Event, BOM, Ajax

| 위치 | 파일 | 배울 수 있는 내용 |
| --- | --- | --- |
| `04_DOM` | `01_getElementsByTagName().html` | 태그 이름으로 요소 선택 |
| `04_DOM` | `02_getElementsByClassName().html` | 클래스 이름으로 요소 선택 |
| `04_DOM` | `03_getElementById().html` | id로 단일 요소 선택 |
| `04_DOM` | `04_querySelector().html` | CSS 선택자로 단일 요소 선택 |
| `04_DOM` | `05_querySelectorAll().html` | CSS 선택자로 여러 요소 선택 |
| `04_DOM` | `06_children_01.html` | 자식 요소 탐색 |
| `04_DOM` | `07_children_02.html` | 자식 요소 응용 탐색 |
| `04_DOM` | `08_parentElement.html` | 부모 요소 탐색 |
| `04_DOM` | `09_next_previousElementSibling.html` | 이전/다음 형제 요소 탐색 |
| `04_DOM` | `10_createElement().html` | 새 HTML 요소 생성 |
| `04_DOM` | `11_moveElement.html` | 요소 위치 이동 |
| `04_DOM` | `12_cloneNode().html` | 요소 복제 |
| `04_DOM` | `13_removeChild().html` | 요소 삭제 |
| `05_Event` | `01_event_01.html` | 이벤트 연결 기초 |
| `05_Event` | `02_event_02.html` | 이벤트 핸들러 작성 |
| `05_Event` | `03_event_03.html` | 이벤트 대상 변경 |
| `05_Event` | `04_event_04.html` | 이벤트를 이용한 UI 변경 |
| `05_Event` | `05_event_05.html` | 여러 요소 이벤트 처리 |
| `05_Event` | `06_event_06.html` | 이벤트 종합 예제 |
| `06_headers_label` | `01_table_headers.html` | table header 접근성 |
| `06_headers_label` | `02_form_label.html` | form label 연결 |
| `07_BOM_min` | `02_setInterval().html` | `setInterval` 타이머 |
| `07_BOM_min` | `08_offset_location_size.html` | 요소 위치와 크기 |
| `07_BOM_min` | `09_scroll_location_size.html` | 스크롤 위치와 크기 |
| `07_BOM_min` | `10_window_location_size.html` | 브라우저 창 크기 |
| `07_BOM_min` | `11_mouse_location.html` | 마우스 좌표 확인 |
| `15_Ajax` | `01_ajax.html` | Ajax 요청 기초 |
| `15_Ajax` | `02_ajax.html` | Ajax로 여러 데이터 불러오기 |
| `15_Ajax` | `data0.html` | Ajax 응답용 샘플 데이터 |
| `15_Ajax` | `success.html` | 요청 성공 화면 예제 |

### 애니메이션, 인터랙션, 반응형

| 위치 | 파일 | 배울 수 있는 내용 |
| --- | --- | --- |
| `08_Animation_gsap/01_gsap` | `01_animate().html` | GSAP 기본 애니메이션 |
| `08_Animation_gsap/01_gsap` | `02_imgMoving.html` | 이미지 이동 애니메이션 |
| `08_Animation_gsap/01_gsap` | `03_fadeInOut().html` | fade in/out 효과 |
| `08_Animation_gsap/01_gsap` | `04_fade_menu.html` | fade 메뉴 인터랙션 |
| `08_Animation_gsap/01_gsap` | `05_slideUpDown().html` | slide up/down 효과 |
| `08_Animation_gsap/01_gsap` | `06_slide_menu.html` | 슬라이드 메뉴 인터랙션 |
| `08_Animation_gsap/02_classList` | `classList.html` | `classList`로 클래스 제어 |
| `08_Web_30/02_html5_layout` | `02_layout.html` | HTML5 시맨틱 레이아웃 |
| `08_Web_30/03_border_gradient` | `border_gradient.html` | CSS border gradient |
| `08_Web_30/05_webfonts` | `webfonts_1.html` | 웹폰트 적용 |
| `08_Web_30/06_fontawesome` | `fontawesome_1.html` | Font Awesome 아이콘 사용 |
| `08_Web_30/07_svg` | `svg_1.html` | SVG 기본 |
| `08_Web_30/10_before_after` | `before_after_1.html` | `::before`, `::after` 가상 요소 |
| `08_Web_30/11_animation` | `animation_1.html` | CSS animation |
| `08_Web_30/12_Transform_Transition` | `Transform_Transition.html` | transform과 transition |
| `08_Web_30/13_galleryImage` | `galleryimg.html` | 이미지 갤러리 UI |
| `08_Web_30/14_TransitionMenu` | `TransitionMenu_1.html` | transition 메뉴 효과 |
| `08_Web_30/15_car_animation` | `car_animation.html` | CSS 자동차 애니메이션 |
| `08_Web_30/16_column` | `column.html` | CSS column 레이아웃 |
| `08_Web_30/17_video` | `video_1.html` | HTML video 삽입 |
| `08_Web_30/18_svg_mask` | `svg_mask_01.html` | SVG mask |
| `08_Web_30/19_blend_mode` | `blend_mode.html` | CSS blend mode |
| `09_Interaction_UI_gsap_min` | `01_menuactivate_01.html` | 메뉴 활성화 UI |
| `09_Interaction_UI_gsap_min` | `02_tabmenu.html` | 탭 메뉴 |
| `09_Interaction_UI_gsap_min` | `03_modalWindow.html` | 모달 창 |
| `09_Interaction_UI_gsap_min` | `04_imgGallery.html` | 이미지 갤러리 |
| `09_Interaction_UI_gsap_min` | `05_animation_menu_tab.html` | 애니메이션 탭 메뉴 |
| `09_Interaction_UI_gsap_min` | `06_accordion_menu_01_tab.html` | 아코디언 메뉴 |
| `09_Interaction_UI_gsap_min` | `07_2depth_animation_menu_tab.html` | 2depth 메뉴 |
| `09_Interaction_UI_gsap_min` | `09_visual_slide_button_rwd.html` | 버튼형 반응형 슬라이드 |
| `09_Interaction_UI_gsap_min` | `10_visual_slide_dot_rwd.html` | dot navigation 슬라이드 |
| `09_Interaction_UI_gsap_min` | `11_visual_slide_index_rwd.html` | index 표시 슬라이드 |
| `09_Interaction_UI_gsap_min` | `12_mousePosition.html` | 마우스 위치 기반 효과 |
| `09_Interaction_UI_gsap_min` | `13_setTimeout().html` | `setTimeout` 타이밍 처리 |
| `09_Interaction_UI_gsap_min` | `14_toolTip.html` | tooltip UI |
| `09_Interaction_UI_gsap_min` | `15_dragPopUp.html` | 드래그 팝업 |
| `09_Interaction_UI_gsap_min` | `16_slide_QuickMenu.html` | 슬라이드 퀵메뉴 |
| `09_Interaction_UI_gsap_min` | `17_scrollSlide_wheel.html` | 마우스 휠 스크롤 슬라이드 |
| `09_Interaction_UI_gsap_min` | `18_scroll_Tistory.html` | 스크롤 기반 화면 전환 |
| `09_Interaction_UI_gsap_min/19_sticky` | `01_sticky.html` | sticky 레이아웃 |
| `09_Interaction_UI_gsap_min/20_scrollTrigger` | `01_scrollTrigger.html` | GSAP ScrollTrigger 기초 |
| `09_Responsive_Web_min/01_html5_temp` | `html5_temp.html` | HTML5 기본 템플릿 |
| `09_Responsive_Web_min/02_fluid_grid` | `01_fluid_grid.html` | 유동 그리드 |
| `09_Responsive_Web_min/03_flexible_img` | `01_flexible_images_background.html` | 반응형 배경 이미지 |
| `09_Responsive_Web_min/03_flexible_img` | `02_flexible_images_img.html` | 반응형 이미지 태그 |
| `09_Responsive_Web_min/04_flexible_movie` | `flexible_movie.html` | 반응형 영상 |
| `09_Responsive_Web_min/05_media_screen` | `01_mediascreen_max-width.html` | max-width media query |
| `09_Responsive_Web_min/05_media_screen` | `02_mediascreen_orientation.html` | orientation media query |
| `09_Responsive_Web_min/06_rwd_pattern` | `01_Fluid_grid.html` | 반응형 패턴: fluid grid |
| `09_Responsive_Web_min/06_rwd_pattern` | `02_ColumnDrop.html` | 반응형 패턴: column drop |
| `09_Responsive_Web_min/07_display_flex` | `01_flex_contents_row.html` | flex row 레이아웃 |
| `09_Responsive_Web_min/07_display_flex` | `02_flex_contents_column.html` | flex column 레이아웃 |
| `09_Responsive_Web_min/08_display_grid` | `01_grid_contents.html` | CSS grid 레이아웃 |

### React

| 위치 | 파일 | 배울 수 있는 내용 |
| --- | --- | --- |
| `01_react_basic_new_soruce/src` | `App01_Component.js` | React 컴포넌트 기초 |
| `01_react_basic_new_soruce/src` | `App02_Props.js` | props 전달 |
| `01_react_basic_new_soruce/src` | `App03_Event.js` | React 이벤트 처리 |
| `01_react_basic_new_soruce/src` | `App04_useState01.js` | `useState` 기초 |
| `01_react_basic_new_soruce/src` | `App05_useState02.js` | 상태 변경 응용 |
| `01_react_basic_new_soruce/src` | `App06_useState03.js` | 여러 상태 관리 |
| `01_react_basic_new_soruce/src` | `App07_Product.js` | 상품 컴포넌트 출력 |
| `01_react_basic_new_soruce/src` | `App08_load_initData.js` | 초기 데이터 로드 |
| `01_react_basic_new_soruce/src` | `App09_load_useEffect01.js` | `useEffect` 기초 |
| `01_react_basic_new_soruce/src` | `App10_load_useEffect02.js` | `useEffect` 데이터 로드 |
| `01_react_basic_new_soruce/src` | `App11_manageProducts.js` | 상품 데이터 상태 관리 |
| `01_react_basic_new_soruce/src` | `App12_useReducer.js` | `useReducer` 기초 |
| `01_react_basic_new_soruce/src` | `App13_Reducer_useCallback.js` | reducer와 `useCallback` |
| `01_react_basic_new_soruce/src` | `App14_Children.js` | children props |
| `01_react_basic_new_soruce/src` | `App15_Context.js` | Context API |
| `01_react_basic_new_soruce/src` | `App16_PostCss.js` | CSS module/PostCSS 스타일링 |
| `01_react_basic_new_soruce/src` | `App17_TodoList.js` | TodoList 구성 |
| `01_react_basic_new_soruce/src` | `App18_Router01.js` | React Router 기초 |
| `01_react_basic_new_soruce/src` | `App19_Router02.js` | 라우터 페이지 분리 |
| `01_react_basic_new_soruce/src` | `App20_Router03.js` | 동적 라우팅 |
| `01_react_basic_new_soruce/src` | `App21_Router04.js` | 라우터 종합 |
| `01_react_basic_new_soruce/src` | `App22_useRef01.js` | `useRef` DOM 참조 |
| `01_react_basic_new_soruce/src` | `App23_useRef02.js` | `useRef` 값 보관 |
| `01_react_basic_new_soruce/src` | `App24_menuActivate01.js` | React 메뉴 활성화 |
| `01_react_basic_new_soruce/src` | `App25_menuActivate02.js` | 메뉴 활성화 응용 |
| `01_react_basic_new_soruce/src` | `App26_animaition_gsap.js` | React에서 GSAP 사용 |
| `01_react_basic_new_soruce/src` | `App27_accordionmenu01.js` | React 아코디언 메뉴 |
| `01_react_basic_new_soruce/src` | `App28_accordionmenu02.js` | React 아코디언 응용 |
| `redux-ex/src` | `index.js` | Redux Provider 연결 |
| `redux-ex/src` | `App.js` | Redux 예제 앱 구성 |
| `redux-ex/src/components` | `Counter.jsx` | `useSelector`, `useDispatch`로 카운터 조작 |
| `redux-ex/src/stores` | `store.js` | Redux store 설정 |
| `redux-ex/src/stores` | `counterSlice.js` | Redux Toolkit slice와 reducer/action 작성 |

`04_react/react_app`, `04_react/react_app_me`, `04_react/react_app_me2`는 위 React 수업 예제를 개인 연습 형태로 반복한 프로젝트입니다. 같은 이름의 `App*.js`, `Components`, `TodoList`, `Pages`, `Context` 파일을 비교하면서 복습하면 좋습니다.

## React 프로젝트 실행

React 프로젝트 폴더로 이동한 뒤 의존성을 설치하고 실행합니다.

```bash
cd 04_react/redux-ex
npm install
npm start
```

다른 React 폴더도 같은 방식으로 실행할 수 있습니다.

## GitHub에서 다시 받기

다른 컴퓨터에서 최신 내용을 받을 때는 저장소 폴더에서 아래 명령어를 실행합니다.

```bash
git pull origin main
```

로컬 변경사항을 버리고 GitHub 내용으로 완전히 맞추려면 주의해서 아래 명령어를 사용합니다.

```bash
git fetch origin
git reset --hard origin/main
```
