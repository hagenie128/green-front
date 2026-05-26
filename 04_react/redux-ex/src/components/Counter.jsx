import { useRef } from "react"
import {useDispatch, useSelector} from 'react-redux';
import "./Counter.css";
import { decrement, increment, incrementByAmount } from "../stores/counterSlice";

export default () => {
    const num = useRef(null);
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch();

    return <div className="counter">
        <h2 className="counter__title">redux 예제</h2>
        <div className="counter__input-row">
            <input className="counter__input" type="number" ref={num} />
            <button className="counter__button" onClick={()=>{
                dispatch(incrementByAmount(Number(num.current.value)));
            }}>증가</button>
        </div>
        <hr className="counter__divider" />
        <div className="counter__controls">
            <button className="counter__button counter__button--round" type="button" onClick={()=>dispatch(decrement())}>-</button>
            <span className="counter__value">{count}</span>
            <button className="counter__button counter__button--round" type="button" onClick={()=>dispatch(increment())}>+</button>
           
        </div>

    </div>
}