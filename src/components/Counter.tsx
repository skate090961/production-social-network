import React, {useState} from 'react';
import './Counter.scss';

const Counter = () => {
    const [counter, setCounter] = useState(0);

    const incHandle = () => setCounter(prev => prev + 1)

    return (
        <div>
            <h1>{counter}</h1>
            <button onClick={incHandle}>Increment</button>
        </div>
    );
};

export default Counter;