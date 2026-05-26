import React from "react";
import Parent from "./Components/Parent";

export default function App08_Children() {
  return (
    <Parent>
      <img src="./images/m3_multiple.png" alt='이미지 설명'/>
      {/* 기존 컴포넌트에 자식객체로 넣음 */}
    </Parent>
  );
}
