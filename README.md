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

## 주요 폴더

| 경로 | 내용 |
| --- | --- |
| `01_javascript_basics/01_JS_Core` | 변수, 연산자, 조건문, 반복문 |
| `01_javascript_basics/02_Function_01` | 함수 기초 |
| `01_javascript_basics/03_Function_02` | 함수 추가 예제 |
| `01_javascript_basics/16_Array` | 배열 예제 |
| `02_browser_dom/04_DOM` | DOM 선택, 생성, 이동, 삭제 |
| `02_browser_dom/05_Event` | 이벤트 처리 |
| `02_browser_dom/07_BOM_min` | window, location, offset, timer |
| `02_browser_dom/15_Ajax` | Ajax 예제 |
| `03_animation_responsive/08_Animation_gsap` | GSAP 기본 애니메이션 |
| `03_animation_responsive/09_Interaction_UI_gsap_min` | 인터랙션 UI 예제 |
| `03_animation_responsive/09_Responsive_Web_min` | 반응형 웹 예제 |
| `04_react/01_react_basic_new_soruce` | React 수업 기본 예제 |
| `04_react/react_app` | React 연습 프로젝트 |
| `04_react/react_app_me` | 개인 React 연습 프로젝트 |
| `04_react/react_app_me2` | 개인 React 연습 프로젝트 2 |
| `04_react/redux-ex` | Redux Toolkit 카운터 예제 |

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
