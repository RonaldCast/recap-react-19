import { useReducer } from 'react';

const initialState = {count: 0};

const counterReducer = (currentState:{count:number}, value:{count:number}) => {
    if(currentState.count >= 5){
        alert("Count can't be greater than 5");
        return {count: currentState.count};
    }
    return {count: currentState.count + value.count};
}

export const ComponentUseReducer = () => {
    const [state, dispatch] = useReducer(counterReducer, initialState)
    return (
        <>
        <h1>ComponentUseReducer</h1>
        <p>{state.count}</p>
        <button onClick={() => dispatch({count: 1})}>Increment</button>
        </>
    )
}