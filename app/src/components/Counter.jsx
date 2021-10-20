import React, {useState} from "react";

const Counter = (props) =>{
    const [count, setCount] = useState(0)

    return (
    <>
        <h3>Current count:{count}</h3>
        <button onClick={()=>setCount(count+1)}> +</button>
        <button onClick={()=>setCount(count-1)}> -</button>
   
    </> 
    )
}


export default Counter;