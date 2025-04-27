import { useState } from "react"

export default function Counter(){


    const counterStyle = {
        border: '2px solid blue',
        padding: '10px',
        margin: '10px',
        borderRadius: '20px',
    }


    const [count, setCount] = useState(0);

    const handleAddCount=()=>{
        const newCount = count + 1;
        setCount(newCount);
    }



    const handleIncrement=()=>{
        const newValue = count + 1;

        setCount(newValue);
    }

    const handleDecrement=()=>{
        const newValue = count - 1;

        setCount(newValue);
    }


    const handleMakeZero= () => {
        const newValue = 0;

        setCount(newValue);
    }



    return (
        <div style={counterStyle}>
            <h3>Count: {count} </h3>

            {/* <button onClick={handleAddCount}>Add</button> */}

            <button onClick={handleIncrement}>Increment by one</button>
            <button onClick={handleDecrement}>Decrement by one</button>
            <button onClick={handleMakeZero}>Make Zero</button>

        </div>
    )
}