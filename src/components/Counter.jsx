import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrease } from "../redux/counterSlice";
import '../styles/App.css';

const Counter = () => {
    const {count} = useSelector(state => state.counter);
    const dispatch = useDispatch();

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => dispatch(increment(1))} className="increment">increment</button>
            <button onClick={() => dispatch(decrease(1))} className="decrease">decrease</button>
        </div>
    )
}

export default Counter;
{/* <div className="d-flex p-2 justify-content-center gap-3"></div> */}

{/* <button type="button" onClick={() => dispatch(decrease(1))} className="btn btn-outline-danger">decrease</button> */}
{/* <button type="button" onClick={() => dispatch(increment(1))} className="btn btn-success increment">increment</button> */}