import { useRef } from "react";
import "./Counter.css";
import { useCountStore } from "../stores/CountStore";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    const num = useRef(null);
    const count = useCountStore((state) => state.count);
    const increment = useCountStore((state) => state.increment);
    const decrement = useCountStore((state) => state.decrement);
    const incrementByAmount = useCountStore((state) => state.incrementByAmount);

    return (
    <div className="counter">
        <h2 className="counter__title">zustand 예제</h2>
        <div className="counter__input-row">
            <input className="counter__input" type="number" ref={num} />
            <button
                className="counter__button"
                type="button"
                onClick={() => incrementByAmount(Number(num.current.value))}
            >
                증가
            </button>
        </div>
        <hr className="counter__divider" />
        <div className="counter__controls">
            <button className="counter__button counter__button--round" type="button" onClick={decrement}>-</button>
            <span className="counter__value">{count}</span>
            <button className="counter__button counter__button--round" type="button" onClick={increment}>+</button>
        </div>
    </div>
    );
}
