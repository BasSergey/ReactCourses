import React from "react";
import NavBar from "./components/NavBar";
import AppRoutes  from "./components/AppRoutes";
import { BrowserRouter } from "react-router-dom";


const App = () => {
    return (

        <BrowserRouter>
            <NavBar />
            <AppRoutes />
        </BrowserRouter>

    )
}

export default App;
