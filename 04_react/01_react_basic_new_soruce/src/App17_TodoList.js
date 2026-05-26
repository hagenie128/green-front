/*
작업개요 

1. 전체 컴포넌트 구성과 UI 스타일 작업 


  temp폴더 todolist.html 파일 참고해서 <Title> , <TodoState>, <TotoList>, <Todo>, <AddTodo>  각 컴포넌트 작업후 CSS스타일 UI 작업  

   - mpa() 함수로 먼저 작업하지 말고 기본 Html 마크업으로 작업 
   - css 파일 모듈화 작업 (id명, class명 모듈화 하면서 마크업 먼저작업, css파일 모듈화후 import 적용 )   
   - 중복클래스 적용 className=`${Style.classname1} ${Style.className2}` 
   - App.js 전체파일에서 <Title>, <TodoState>, <TodoList> 컴포넌트 구성
   - <TodoList> 컴포넌트 안에 <Todo>, <AddTodo> 컴포넌트 작업 
   - react icon 사용하기  https://react-icons.github.io/react-icons/  
     (설치  import { BsTrash } from "react-icons/bs"; 해당아아콘 import { BsTrash } from "react-icons/bs"; 컴포넌트사용 <BsTrash/>)




2. <TodoState> 컴포넌트 카테고리 출력, 변경, 카테고리 스타일 활성화 작업 진행 


   App.js 전체파일에서 <TodoState> 전체 카테고리 출력 , 카테고리변경, 카테고리 활성화 기능을 적용한다. 
   
   - 전체 카테고리 배열 설정 
   - 선택된 카데고리를 관리할 useState() 함수설정 
   - 카테고리를 바꾸어 주는 함수 설정 
   - <TodoState> 컴포넌트에 각 Props로 전달 
   - <TodoList> 컴포넌트에 선택된 카테고리 Props로 전달 
   - 각 카테고리 <li> 들을 전체 categorys 객체를 활용하여 map() 함수로 구성한다.
   - className (중복클래스) 설정에서 각 카테고리와 선택된 카테고리와 같으면 Style.selected 활성화 스타일 적용 
     ( className={`${Style.status_btn} ${item===category && Style.selected}`} )
   - 각 카테고리 버튼에 onClick 이벤트를 지정하고 Props로 전달받은 onChangeCategory()를 실행하여 클릭한 카테고리를 선택된 카테고리로 활성화 스타일 적용한다. 
  



3. <TodoList> 초기 할일목록 출력하고 해당 카테고리에 해당하는 목록 필터링 , 전체목록 업데이트, 추가, 삭제하는 함수 적용 


   <TodoList> 컴포넌트 내에서 초기 할일목록을 출력하고 , 각 할일목록상태를 업데이트, 추가, 삭제하는 함수를 만들고 각 해당되는 컴포넌트에 Props로 전달한다. 

  - Props로 전달받은 현제 선택된 카테고리에 해당하는 상품들을 getCategoryItems() 함수와 filter() 함수를 활용하여 필터링하여 구분한다. 
  - 구분된 현제카테고리에 해당하는 상품들만 map() 함수를 활용하여 다시 출력한다.   
  - 각 할일목록상태를 업데이트, 추가, 삭제하는 함수를 만들고 각 해당되는 컴포넌트에 Props로 전달




4. <Todo> 컴포넌트 할일목록에서 상태 변경하기 ( 업데이트 )


  <Todo> 컴포넌트에서 할일목록의 체크상태를 변경하면 <TodoList> 컴포넌트 전체 할일 목록에서 변경 (Update) 되는 작업을 진행한다.

  - 할일목록 checkbox 상태를 변경하면 상태를 변경하는 함수를 만들고, 해당 목록을 <TodoList> 컴포넌트의 Props로 전달하여 전체목록에서 업데이트 한다. 


5. <AddTodo> 컴포넌트에서 할일목록 추가하기 


   <AddTodo> 컴포넌트에서 텍스트를 입력하면 할일 목록을 생성하는 함수를 만들고 <TodoList> 컴포넌트의 Props로 전달하여 전체목록에서 추가 한다. 

  - e.preventDefault() 함수를 사용하여 폼요소의 텍스트 입력값을  Submit ( 보내기 ) 할때 모든 컴포넌트가 리랜더링 되는 현상을 막아 데이터가 초기화되는 것을 방지한다. 
  - trim() 함수를 사용하여 텍스트를 입력되지 않은 상태에서할일목록이 추가되는 것을 방지 



6. <Todo> 컴포넌트에서 할일목록 삭제하기 

   <Todo> 컴포넌트에서 할일목록 삭제 버튼 클릭하면 해당목록을 <TodoList> 컴포넌트의 Props로 전달하여 전체목록에서 삭제 한다. 


*/



import React, { useState } from 'react'
import Title from './TodoList/Title'
import TodoState from './TodoList/TodoState'
import TodoList from './TodoList/TodoList'

export default function App17_TodoList() {

  const categorys=['all', 'active', 'complete'] // 전체카테고리 배열설정   

  const [category, setCategory] = useState(categorys[0]) // 선택된 카테고리를 관리할 useState() 설정 

  const changeCategory=(category)=>{ // 카테고리를 바꾸어주는 함수 설정 
    setCategory(category)
  }

  return (
    <>
     <Title/>
     <TodoState categorys={categorys} category={category} onChangeCategory={changeCategory}/>  
     {/* 전테카테고리, 선택된 카테고리, 카테고리 변경함수를 Props로 전달*/}
     <TodoList category={category}/> {/*선택된 카테고리를 Props로 전달*/}
    </>
  )
}
