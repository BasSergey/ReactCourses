import React, { useState } from "react";

const Home = () => {
  return(
    <>
  <div className="container">
  <p className="homeHeader">Registration field</p>
  <ul className="form"> 

  <li>
    <div className="input-field col s6">
      <i className="material-icons prefix">account_circle</i>
      <input
        id="name"
        type="text"
        className="required"
        maxLength = "15"
        placeholder="Name"></input>
      </div>
    </li>

    <li>
      <div className="input-field col s6">
      <i className="material-icons prefix"></i>
        <input
          id="surname"
          type="text"
          className="validate"
          maxLength = "20"
          placeholder="Surname"></input>
        </div>
      </li>

    <li>
    <div className="input-field col s6">
      <i className="material-icons prefix">phone</i>
      <input
        id="phone"
        type="tel"
        className="validate"
        maxLength = "10"
        placeholder="Phone number"></input>
      </div>
      </li>

      <li>
      <div className="input-field col s6">
        <i className="material-icons prefix">date_range</i>
        <input
          id="date"
          type="date"
          className="validate"
          placeholder="Date of birth"></input>
        </div>
        </li>

          <li>
          <div className="input-field col s6">
            <i className="material-icons prefix">email</i>
            <input
              id="email"
              type="email"
              className="validate"
              maxLength="20"
              pattern = "/@/"
              placeholder="E-mail"></input>
            </div>
            </li>

            <li>
            <div className="input-field col s6">
              <i className="material-icons prefix">security</i>
              <input
                id="password"
                type="password"
                className="validate"
                minLength="8"
                placeholder="Password"></input>
              </div>
              </li>

              <li>
              <form action="#">
                <div className="file-field input-field">
                <div className="btn">
                  <span>File</span>
                     <input type="file" multiple></input>
                  </div>
                  <div className="file-path-wrapper">
                    <input className="file-path validate" type="text" placeholder="Upload some photos"></input>
                  </div>
                </div>
              </form>
              </li>
              <li>
              <div className="col s4">
        <a className="waves-effect waves-light btn">
          Registrate
        </a>
      </div>
              </li>
      </ul>
      
  </div>
  </>
)
}
export default Home;