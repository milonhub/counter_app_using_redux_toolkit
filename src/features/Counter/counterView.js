import React from 'react'

import style from './counterView.module.css'
import {useDispatch, useSelector} from 'react-redux'
import { decrement, increment, incrementBy5, reset } from './counterSlice';

const CounterView = () => {
    const count = useSelector((state) => state.counter.count);
    console.log(count)
    const dispatch = useDispatch();

  return (
    <div className={style.counter_container}>
         
        <h2>Using Redux_oolkit</h2>
        <h2>Counter App</h2>

        <h1>count: {count}</h1>

        <button onClick={()=> { 
            dispatch(increment());
        }
        }>Increment</button>

        <button onClick={()=> { 
            dispatch(decrement());
        }
        }>Decrement</button>

        <button onClick={()=> { 
            dispatch(reset());
        }
        }>Reset</button>

        <button onClick={()=> { 
            dispatch(incrementBy5(5));
        }

        }>IncrementBy5</button>
    </div>
  )
}

export default CounterView