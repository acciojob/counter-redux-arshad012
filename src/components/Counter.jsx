import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateCounter, resetCounter } from "../redux/counterSlice";

const Counter = () => {
    const {count} = useSelector(state => state.counter);
    const dispatch = useDispatch();

    const handleClick = (val) => {
        dispatch(
            updateCounter(val)
        )
    }

    return (
        <div>
            <h1 style={{textAlign: 'center'}}>Count: {count}</h1>
            <div className="d-flex p-2 justify-content-center gap-3">
                <button type="button" onClick={() => handleClick(-1)} className="btn btn-outline-danger">Decreament</button>
                <button type="button" onClick={() => handleClick(1)} className="btn btn-success">Increament</button>
                <button type="button" onClick={() => dispatch(resetCounter())} className="btn btn-primary">Reset count</button>
                {/* <button type="button" class="btn btn-primary">Primary</button> */}
            </div>
        </div>
    )
}

export default Counter;