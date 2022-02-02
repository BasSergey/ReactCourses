import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import http from "../http";
function Registration() {
    const [user, setUser] = useState({});
    const values = {
        name: 'account_circle',
        phone: 'phone',
        password: 'dialpad',
        email: 'email',
        // tole: 'person',
    }
    const onChange = (e) => {
        setUser({ ...user, [e.target.id]: e.target.value })
    }
    const registration = () =>{
        http.post('/registration', user).then((res)=>{
            console.log(res);
          }).catch((err)=>console.log(err))
    }
    return (

        <form className="container">
            {Object.keys(values).map((value) =>
                <div className="row">
                    <div className="input-field row s6">
                        <i className="material-icons prefix">{values[value]}</i>
                        <input
                            id={value}
                            type="text"
                            className="validate"
                            placeholder={`input your ${value}`}
                            onChange={onChange}
                        />
                    </div>
                </div>
            )
            }


            {/* <div className="input-field col s6">
                <i className="material-icons prefix">{values[values]}</i>
                <input
                    id={value}
                    type="text"
                    className="validate"
                    placeholder="Enter Name"
                    onChange={onChange}
                />
            </div>
            <div className="input-field col s6">


                <div className="row m-1">

                    <div className="col s4">

                        <a
                            className="waves-effect waves-light btn"
                            onClick={() => console.log('')}
                        >
                            Log in
                        </a>
                    </div>
                </div
            </div> */}
            <a onClick={()=>registration()} className="waves-effect waves-light btn m-1">Registration</a>
            <Link className="waves-effect waves-light btn m-1" to='/login'>Login</Link>
        </form>
    )
}

export default Registration
