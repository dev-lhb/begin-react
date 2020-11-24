import React, { useState } from 'react';

const Counter = () => {
    const [number, setNumber] = useState(0);

    const Increase = () => {
        setNumber(number+1);
        setNumber(number+1);
        console.log(number);
    }

    const Increase2 = () => {
        setNumber(num => num+1);
        setNumber(num => num+1);
        console.log(number);
    }
    return (
        <div>
            <h1>{number}</h1>
            <button onClick={Increase}>+1</button>
            <button onClick={Increase2}>+1</button>
        </div>
    )
}

export default Counter;