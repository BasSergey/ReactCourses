import React, {useEffect, useState} from "react";
const Clock = () =>{

    const [state, setState]=useState({
    date: new Date()
})
useEffect(()=>timerUpdate(),[])
    const timerUpdate = ()=> {
      setInterval(
        () => tick(),
        1000
      );
    }
  

    const tick= ()=> {
      setState({
        date: new Date()
      });
    }
  
      return (
        <div>
          <h1>Привет, мир!</h1>
          <h2>Сейчас {state.date.toLocaleTimeString()}.</h2>
        </div>
      );
    }

//   https://ru.reactjs.org/docs/state-and-lifecycle.html
export default Clock; 