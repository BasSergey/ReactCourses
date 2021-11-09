import React, { useState } from "react";
import NavBar from "./components/NavBar";
import AppRoutes from "./components/AppRoutes";
import AuthContext from "./context";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  const [isAuth, setIsAuth] = useState(false);

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
