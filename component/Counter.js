import React , {useState} from 'react';
function Counter(){
    const[count,setCount]=useState(0);
    const incrementCount=()=>{
        setCount(count+1);
    }
    const decrementCount=()=>{
        setCount(count-1);
    }
    return(
        <div>
            <h2> Count:{count}</h2>
            <button onClick={incrementCount}>Increment</button>
            <button onClick={decrementCount}>decrement</button>
        </div>
    );

}
export default Counter;