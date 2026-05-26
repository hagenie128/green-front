
// 주의) Readucer 함수는 컴포넌트가 아닌 일반함수 

export default function productsReducer(products, action) { 
// {products, action} Props 형태로 전달받으면 안됨 
// 변경할 객체, 명령타입을 일반매개변수로 전달받음 
// export default 적용 

    switch(action.type){ // 명령타입과 변수에 따라 상품관리 ( 로드, 수정, 추가, 삭제 ) 하는 명령을 실행 

        case 'load' : { // 처음 상품들을 로드명령 실행

            const {data} = action 

            return data

            
        }
        case 'update': {

            const {name, price, text, isNew} = action 
            
            /* 구조분해 할당
            const name=action.name
            const price=action.price
            const text=action.text
            const isNew=action.isNew
            */

            return (
                products.map((item)=>{
                    if(item.name===name){
                        return {...item, price:price, text:text, isNew:isNew}
                    }else{
                        return {...item}
                    }
                })
            )
        }

        case 'add' : {

            const {image, name, text, price, isNew} = action 

            return (
                [...products, {image, name, text, price, isNew}]
            )


        }

        case 'remove' : {

            const {name} = action 
            return (
                // products.filter((item)=>{
                //     if(item.name!==name){
                //         return {...item}
                //     }
                // }

                    products.filter((item)=>(item.name!==name))
                )
            
        }

        default : {
            throw Error (`알수없는 액션타입 입니다. : ${action.type} `)
        }
    }
  
}
