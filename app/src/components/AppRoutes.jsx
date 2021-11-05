//переключатель
import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import Users from "../pages/Users";
import Devices from "../pages/Devices";
import Loader from "react-loader-spinner";
import Home from '../pages/Home'
import Posts from "../pages/Posts";

const AppRoutes = () => {
// APploadin бфл
  return (
    <Switch>
      <Route path='/home' component={Home}/>
      <Route path="/users" component={Users} />
      <Route path="/devices" component={Devices} />
      <Route path="/posts" component={Posts} />
      
    </Switch>
  );
};

export default AppRoutes;
