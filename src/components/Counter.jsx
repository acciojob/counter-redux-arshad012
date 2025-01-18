import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrease } from "../redux/counterSlice";

const Counter = () => {
    const {count} = useSelector(state => state.counter);
    const dispatch = useDispatch();

    return (
        <div>
            <h1 style={{textAlign: 'center'}}>{count}</h1>
            <div className="d-flex p-2 justify-content-center gap-3">
                <button type="button" onClick={() => dispatch(decrease(1))} className="btn btn-outline-danger decrease">decrease</button>
                <button type="button" onClick={() => dispatch(increment(1))} className="btn btn-success increment">increment</button>
            </div>
        </div>
    )
}

export default Counter;