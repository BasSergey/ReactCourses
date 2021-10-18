
import React from "react";
import Clock from "./components/Clock";
import MyButton from "./components/MyButton/MyButton";
import MyButtonClass from "./components/MyButton/MyButtonClass";
import MyInput from "./components/MyInput/MyInput";
const buttonArray = ['primary', 'secondary', 'success', 'danger', 'warning']
const inputArray = ['first', 'second', 'third']


const App = () => {

  return (


    <div className="App">
      <MyInput className="input">
      </MyInput>
      <div className="subcontainer">
        <MyButton className="ok">OK</MyButton>
        <MyButton className="cancel">CANCEL</MyButton>
      </div>
    </div>
  );
};



export default App;
