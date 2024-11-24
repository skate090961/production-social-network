import React, {useState} from 'react';
import './Counter.module.scss';
import classes from './Counter.module.scss'

const Counter = () => {
    const [counter, setCounter] = useState(0);

    const incHandle = () => setCounter(prev => prev + 1)

    return (
        <div>
            <h1>{counter}</h1>
            <button onClick={incHandle} className={classes.btn}>Increment</button>
        </div>
    );
};

export default Counter;