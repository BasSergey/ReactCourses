import React, { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import AppRoutes from "./components/AppRoutes";
import AuthContext from "./context";
import { BrowserRouter } from "react-router-dom";


// && если есть то...
const App = () => {
  const [isAuth, setIsAuth] = useState(false);

useEffect(()=>{
  if(window.localStorage.getItem('auth')){  //когда монтируется страница . Если есть в localstorage auth
    setIsAuth(true)
  }
},[])
  return (
    //   Provider окутывает все компоненты(синия область на картинке)
    <AuthContext.Provider
    value={{
        isAuth,
        setIsAuth
    }}>
        {/* Все ниже могут пользоваться тем что в value */}
      <BrowserRouter>
        <NavBar />
        <AppRoutes />
      </BrowserRouter>
    </AuthContext.Provider>
  )
}

export default App;
