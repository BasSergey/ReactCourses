//переключатель
import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import Users from "../pages/Users";
import Devices from "../pages/Devices";
import Loader from "react-loader-spinner";

const AppRoutes = () => {
    const delay = 2500
  const [loading, setLoading] = useState(true);
  setTimeout(()=>{
      setLoading(false)  /* когда проходит время 3с setLoading(false) */
    },delay)

  if (loading) {  
    return (
      <Loader
      className="loader-center"
        type="Circles"
        color="#ee6e73"
        height={100}
        width={100}
        timeout={delay} //3 secs
      />
    );
  }
  return (
    <Switch>
      <Route path="/users" component={Users} />
      <Route path="/devices" component={Devices} />
    </Switch>
  );
};

export default AppRoutes;
