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
