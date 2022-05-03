import React from 'react';
import {useDispatch, useSelector} from 'react-redux'

import {counterActions} from '../redux/slices/counter.slice'
export const Counter = () => {
    const {count1, count2} = useSelector(state => state.counter);
    const dispatch = useDispatch();
    return (
        <div>
            <div>
                <h2>Значення 1: {count1}</h2>
                <button onClick={()=>dispatch(counterActions.incCount1())}>INC</button>
                <button onClick={()=>dispatch(counterActions.decCount1())}>DEC</button>
                <button onClick={()=>dispatch(counterActions.reset1(0))}>RESET</button>
            </div>
            <div>
                <h2>Значення 2: {count2}</h2>
                <button onClick={()=>dispatch(counterActions.incCount2())}>INC</button>
                <button onClick={()=>dispatch(counterActions.decCount2())}>DEC</button>
                <button onClick={()=>dispatch(counterActions.reset2(0))}>RESET</button>
            </div>
        </div>
    );
};