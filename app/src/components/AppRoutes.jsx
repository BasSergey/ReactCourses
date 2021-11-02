//переключатель
import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import Users from "../pages/Users";
import Devices from "../pages/Devices";
import Loader from "react-loader-spinner";
import Home from '../pages/Home'

const AppRoutes = () => {
// APploadin бфл
  return (
    <Switch>
      <Route path='/home' component={Home}/>
      <Route path="/users" component={Users} />
      <Route path="/devices" component={Devices} />
    </Switch>
  );
};

export default AppRoutes;
