import React, { useEffect, useState, useContext } from "react";
import NavBar from "./components/NavBar";
import AppRoutes from "./components/AppRoutes";
import AuthContext from "./context";
import { BrowserRouter } from "react-router-dom";
import { ThemeContext } from "./components/ThemeContext";
import ButtonTheme from "./components/MyButton/ButtonTheme"

// && если есть то...
const App = () => {
  const [isAuth, setIsAuth] = useState(false);
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  useEffect(() => {
    if (window.localStorage.getItem('auth')) {  //когда монтируется страница . Если есть в localstorage auth
      setIsAuth(true)
    }
  }, [])
  return (
    //   Provider окутывает все компоненты(синия область на картинке)

    <div className={`bg ${darkMode ? "bg-dark" : "bg-light"}`}>
      <AuthContext.Provider
        value={{
          isAuth,
          setIsAuth
        }}
      >
        {/* Все ниже могут пользоваться тем что в value */}

       
        <BrowserRouter>
          <NavBar />

          <AppRoutes  />
        </BrowserRouter>

      </AuthContext.Provider>
    </div>
  )
}

export default App;
