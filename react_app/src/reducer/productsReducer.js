export default function productsReducer(products, action) {
  //디스패치 통해 받은 변수, 디스패치로부터 전달받은 객체
  switch (action.type) {
    case "load": {
      // const {data}=action
      const data = action.data; //통신을 통해 들어온 res.data
      return data; //데이터를 다시 던짐
    }
    case "update": {
      // const name=action.name
      // const text=action.text
      // const price=action.price
      // const isNew=action.isNew
      const { name, text, price, isNew } = action; //한번에 들고 오도록 약식으로
      return products.map((item, index) => {
        if (item.name === name) {
          return { ...item, text, price, isNew };
        } else {
          return { ...item };
        }
      });
    }
    case "add": {
      const { image, name, text, price, isNew } = action;
      return [...products, { image, name, text, price, isNew }];
    }
    case "remove": {
      const { name } = action;
      return products.filter((item) => item.name !== name);
    }
    default: {
      throw new Error(`알수없는 액션 타입입니다 :${action.type}`);
    }
  }
}
