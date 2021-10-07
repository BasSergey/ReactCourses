
import React from "react";
import MyButton from "./components/MyButton/MyButton";
import MyButtonClass from "./components/MyButton/MyButtonClass";
const buttonArray=['primary','secondary','success','danger','warning']
const App = () => {
  return (

    <div className="App">
      
      {buttonArray.map((btn)=>   // map перебор массива
      
      <MyButton className={btn}>
      {btn}
        </MyButton> 
      )}
      </div>
  ); 
  
  


}





export default App;
