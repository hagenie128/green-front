
export default function productsReducer(products,action) {
    switch(action.type){
        case 'load':{
            const {data}=action
            return data
        }
        case 'edit':{
            const {name,text,price,isNew}=action
            return(
                products.map((item,index)=>{
                    if(item.name===name){
                        return{...item,text,price,isNew}
                    }else{
                        return{...item}
                    }
                })
            )
        }
        case 'add':{
            const{image,name,text,price,isNew}=action
            return[...products,{image,name,text,price,isNew}]
        }
        case 'remove':{
            const{name}=action
            return(products.filter((item,index)=>(item.name!==name)))
        }
        default:{
            throw Error(`알수없는 접근입니다.${action.type}`)
        }
    }
}
