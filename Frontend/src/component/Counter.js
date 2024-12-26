import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../action/counter-actions";

const Counter =()=>{
    const counter = useSelector(state=>state.counter||0);
    const dispatch = useDispatch();
    return(
        <div>
            <h1>Counter: {counter}</h1>
            <button onClick={()=>dispatch(increment())}>Increment</button>
            <button onClick={()=>dispatch(decrement())}>Decrement</button>
        </div>
    )
}
export default Counter;