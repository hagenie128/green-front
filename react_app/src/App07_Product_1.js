import React, { useEffect, useState } from "react";
import Product from "./Components/Product";
import axios from "axios";

export default function App07_Product_1() {
  const [products, setProducts] = useState([]); //넣으면 렌더링을 생각하기, setProduct가 사용될 때 마다 렌더링됨
  const [newCheck, setNewCheck] = useState(false);
  useEffect(() => {
    axios.get(`./data/products.json`).then((res) => {
      setProducts(res.data);
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
  const changeProduct = () => {
    let name = prompt("변경할 상품 이름을 입력하세요");
    let text = prompt("변경할 상품 내용을 입력하세요");
    let price = window.prompt("변경할 상품 가격을 입력하세요");
    let isNew = window.confirm("ffff");
    //isNew=isNew.startsWith('true')//특정한 단어가 있는지 확인해서 논리값으로 바꾸기, true가 있으면 참

    setProducts((prev) => {
      return prev.map((item, index) => {
        //map은 조건에 의해서 새로 만들어냄, fliter는 조건에 의해서 걸러내기만 함
        if (item.name === name) {
          return { ...item, text: text, price: price, isNew: isNew };
          //스프레드 연산자-기존 속성을 그대로 두고 새로운 정보만 바꿔서 새로운 오브젝트를 만들어 리턴
        } else {
          return { ...item }; //바꾸지 않을 아이템들은 모두 그대로 리턴
        }
      });
    });
  };
  const addProduct = () => {
    let image = prompt("추가할 이미지 경로를 입력하세요");
    let name = prompt("추가할 상품 이름을 입력하세요");
    let text = prompt("추가할 상품 내용을 입력하세요");
    let price = prompt("추가할 상품 가격을 입력하세요");
    let isNew = prompt("신상품 여부를 입력하세요");
    isNew = isNew.startsWith("true");

    setProducts((prev) => {
      return [...prev, { image: image, name, text, price, isNew }]; //기존 배열은 그대로 두고 새로운 객체만 추가, 속성값과 넣을 값이 같아서 축약식
    });
  };
  const removeProduct = () => {
    let name = prompt("삭제할 상품명을 입력하세요");

    setProducts((prev) => prev.filter((item, index) => item.name !== name)); //이름이 같지 않은 것만 리턴해줌, 리턴 축약식
  };
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
