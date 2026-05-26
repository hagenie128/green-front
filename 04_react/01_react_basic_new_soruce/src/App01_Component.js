/*

작업개요 

- Html 레이아웃 구조를 부분적인 컴포넌트 (Component)기능으로 모듈화해서 효율적으로 웹 페이지를 렌더링 (사용자 정의 테크 )

- 필요한 이미지나 외부 자료들은 public 폴더에 저장
*** public 폴더안에 images 경로는 어디서는 같은 경로에서 사용가능 - 차후 배포시 build 폴더 경로를 기준 ***
- index.js 초기파일에 reset.css 파일 적용 
- 컴포넌트 파일들은 Components 폴더에 따로 저장 
- 파일의 이름과 함수 이름 ( 컴포넌트 ) 반드시 같아야 하고, 이름 첫 글자는 반드시 대문자
- 상단 import 명령으로 컴포넌트 적용
- 상단 import 명령 css 파일 적용
- Html 테그는 반드시 return() 메서드 안에 삽입
- 최상위 테크는 반드시 한개만 사용 ( <> </> 프레그먼트 테그사용 )
- 하단 export default  명령으로 컴포넌트 출력

- Html 레이아웃 구조를  Header, Contents, Footer 각 컴포넌트로 분리해서 랜더링 


React 확장프로그램 

- ES7 + React/Redux/React-Native snippets - Vs code 확장 프로그램 ( 컴포넌트 자동 완성 - 단축키 rfc )
- Auto Import  - Vs code 확장 프로그램 ( 컴포넌트 자동 Import 기능 )
- React Developer Tools  - 크롬 확장 프로그램 설치 ( 개발자 도구 F12  React 개발자 도구 추가 )    
    구글 검색 > 확장 프로그램 추가 > 확장 프로그램 관리 > 파일 URL에 대한 액세스 허용 및 스크릿 모드 허용 체크     
    개발자 도구 F12 > 항목 더 보기 ( >> ) 버튼 > Compernent 선택 등 사용


*/


import Header from './Components/Header' // 사용할 컴포넌트 적용 
import Contents from './Components/Contents'
import Footer from './Components/Footer'

function App01_Component(){

    return (        
        <> 
          {/* JSX 문법영역 */ }

          {/* 최상위 테그는 반드시 하나만 존재  ( <> </> 프레그먼트 - 의미없는 테그 ) */}
            <Header/> {/* 종료테그 없을시 반드시 "/" 사용하여 막음 */}            
            <Contents/>
            <Footer/>
            
        </>
    )
}

export default App01_Component  // 해당 컴포넌트를 외부에서 사용할수 있도록 출력