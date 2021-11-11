import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context";

const NavBar = () => {
  const {setIsAuth} = useContext(AuthContext)
  const logout = ()=>{    //для пароля
    localStorage.clear(); 
    setIsAuth(false)    
  }
  return (
    <nav>
      <div className="nav-wrapper">
        <a href="#" className="brand-logo">Logo</a>
        <ul id="nav-mobile" className="right">
          <li><Link to='/users'>Users</Link></li>
          <li><Link to='/devices'>Devices</Link></li>
          <li><Link to='/home'>Home</Link></li>
          <li><Link to='/posts'>Posts</Link></li>
          <a 
          class="waves-effect waves-light btn"
          onClick={()=>logout()}
          ><i class="material-icons right">exit_to_app</i>button</a>
        </ul>
      </div>
    </nav>

  );
}
export default NavBar;
