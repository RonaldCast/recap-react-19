import { useEffect, useState, useRef } from "react";

export const ComponentBasicHooks = () => {
    const [count, setCount] = useState(0);
    const inputRef = useRef<HTMLInputElement>(null);
    const showValue = () => {
        alert(inputRef.current?.value);
    }

    useEffect(() => {
        console.log("ComponentBasicHooks mounted");
    },[]);

    return (
        <>
        <h1>ComponentBasicHooks: useState, useRef, useEffect</h1>
        <input ref={inputRef}/>
        <button onClick={showValue}>Show Value</button>
        <p>
         {count}
        </p>
         <button onClick={() => setCount(count + 1)}>Increment</button>
        </>
    )
};