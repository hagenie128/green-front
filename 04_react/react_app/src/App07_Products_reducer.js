import React, { useCallback, useEffect, useReducer, useState } from "react";
import Product from "./Components/Product";
import axios from "axios";
import productsReducer from "./reducer/productsReducer";

export default function App07_Products_reducer() {
  const [products, dispatch] = useReducer(productsReducer, []); //디스패치는 전달자, (처리할 함수,초기값)
  const [newCheck, setNewCheck] = useState(false);
  useEffect(() => {
    axios.get(`./data/products.json`).then((res) => {
      dispatch({ type: "load", data: res.data }); //일하는 형태, 전달할 값
    });
  }, []); //[변수or오브젝트]가 변경될 때마다 명령 실행
  const changeNewCheck = () => {
    setNewCheck((prev) => !prev);
  };
  const getNewProducts = (products) => {
    //변수로 products를 받아서 필터 적용
    if (newCheck === true) {
      //스크립트 구간이기 때문에 if사용 가능
      return products.filter((item, index) => item.isNew === true); //리턴 생략 축약식
    } else {
      return products; //한줄이라 괄호 생략, 신상품 체크가 없기 때문에 전체 리턴
    }
  };
  const newProduct = getNewProducts(products); //리턴에 뿌릴 새로운 변수를 함수 실행한 값으로 만들어줌
  //get함수에서의 products는 변수 역할만 하기 때문에 실제 products를 함수에 뿌려줌
  const changeProduct = useCallback(() => {
    //useEffect는 실행하자마자 로딩을 막고 콜백은 함수를 막음,리로딩될때는 안읽음
    //한번실행하고 하지마
    let name = prompt("변경할 상품 이름을 입력하세요");
    let text = prompt("변경할 상품 내용을 입력하세요");
    let price = prompt("변경할 상품 가격을 입력하세요");
    let isNew = prompt("신상품 여부를 입력하세요");
    isNew = isNew.startsWith("true"); //특정한 단어가 있는지 확인해서 논리값으로 바꾸기, true가 있으면 참
    dispatch({
      type: "update",
      name: name,
      text: text,
      price: price,
      isNew: isNew,
    });
  }, []); //리로딩할 조건
  const addProduct = useCallback(() => {
    let image = prompt("추가할 이미지 경로를 입력하세요");
    let name = prompt("추가할 상품 이름을 입력하세요");
    let text = prompt("추가할 상품 내용을 입력하세요");
    let price = prompt("추가할 상품 가격을 입력하세요");
    let isNew = prompt("신상품 여부를 입력하세요");
    isNew = isNew.startsWith("true");
    dispatch({ type: "add", image, name, text, price, isNew });
  });
  const removeProduct = useCallback(() => {
    let name = prompt("삭제할 상품명을 입력하세요");
    dispatch({ type: "remove", name });
  });
  return (
    <>
      신상품보기
      <input type="checkbox" value={newCheck} onChange={changeNewCheck} />
      {/* 값이 바뀔 때마다 해당 함수 실행, value는 입력될 값이 무엇인지*/}
      {newProduct.map((item, index) => {
        return (
          <Product
            image={item.image}
            name={item.name}
            text={item.text}
            price={item.price}
            isNew={item.isNew}
          />
        );
      })}
      <button onClick={changeProduct}>상품수정</button>
      <button onClick={addProduct}>상품추가</button>
      <button onClick={removeProduct}>상품삭제</button>
    </>
  );
}
