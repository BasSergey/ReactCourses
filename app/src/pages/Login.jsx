import React, { useEffect, useState, useContext } from "react";
import AuthContext from "../context";
import Loader from "react-loader-spinner";

const Login = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);



  return (
    <>


    <div className="container">
      <h3>Log in</h3>

      <div className="input-field col s6">
        <i className="material-icons prefix">account_circle</i>
        <input
          id="name"
          type="text"
          className="validate"
          placeholder="Enter Name"
        />
      </div>
      <div className="input-field col s6">
        <i className="material-icons prefix">account_circle</i>
        <input
          id="name"
          type="text"
          className="validate"
          placeholder="Enter Name"
        />

        <div className="row m-1">
          <div className="col s4">
            <a
              className="waves-effect waves-light btn"
              onClick={() => setIsAuth(true)}
            >
              Log in
            </a>
          </div>
        </div>
      </div>
    </div>
    


    </>
  );
};

export default Login;
