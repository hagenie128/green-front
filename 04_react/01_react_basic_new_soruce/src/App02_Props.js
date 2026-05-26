import Header from './Components/Header'
import Contents from './Components/Contents'
import Footer from './Components/Footer'

function App02_Props(){

    return (
        <>
            <Header/>          
            <Contents title="Create React App" text="Set up a modern web app by running one command."/>
             {/* props - 컴포넌트내에 출력할 값을 컴포넌트 외부에서 사용자 정의 속성으로 적용*/}
            <Footer/>
        </>
    )
}

export default App02_Props 