
import React, { useState } from "react";
import Clock from "./components/Clock";
import Counter from "./components/Counter";
import MyButton from "./components/MyButton/MyButton";
import MyButtonClass from "./components/MyButton/MyButtonClass";
import MyInput from "./components/MyInput/MyInput";
const buttonArray = ['primary', 'secondary', 'success', 'danger', 'warning']
const inputArray = ['first', 'second', 'third']

const App = () => {

  return (
    <div className="App">
      <div className="container">
        <MyInput className="input">
        </MyInput>
        <div className="subContainer">
          <MyButton />
        </div>
      </div>
      <Clock />
      <Counter />
    </div>
  );
};
export default App;
