import React, { useEffect, useState } from "react";
import UserList from "../components/UserList";
import MyModal from "../components/MyModal/MyModal";
import axios from "axios";
import Loader from "react-loader-spinner";

const Users = () => {
  const delay = 1000;
  const [loading, setLoading] = useState(true);

  const fetchUsers = async () => {
    // asyn await помгают сделать функцию асинкронной
    const users = await axios.get("https://jsonplaceholder.typicode.com/users");
    setUsers(users.data);
    setLoading(false);
  };
  useEffect(() => {
    fetchUsers();
  }, []);

  const [users, setUsers] = useState(null);
  const [user, setUser] = useState({
    name: "",
    username:"",
    phone: "",
    email:"",

  });

  const onChange = (e) => {
    if (e.target.id == "name") {
      setUser({ ...user, name: e.target.value });
    } else if(e.target.id == "phone") {
      setUser({ ...user, phone: e.target.value });
    }
    else if(e.target.id == "email") {
      setUser({ ...user, email: e.target.value });
    }
    else{
      setUser({ ...user, username: e.target.value });
    }
    
  };

  const addUser = () => {
    const id = Math.random() * 1;
    setUser({ ...user, id: id });
    setUsers([...users, user]);
    setUser({
      name: "",
      username:"",
      phone: "",
      email:"",

    });
  };

  const removeUser = (id) => {
    const confirm = window.confirm("Реально удалить?");
    if (confirm == true) setUsers(users.filter((user) => user.id !== id)); //для проверки на удаление
  };
  const clear = () => {
    setUser({ name: "", username:"", phone: "", email:""});
  };
  console.log(user);
  const [showModal, setshowModal] = useState(false);

  return (
    <div className="App">
      <div className="container">
        {/* <button onClick={() => fetchUsers()}>LALALA</button> */}

        <MyModal visible={showModal} setVisible={setshowModal}>
          {
            <>
              <div className="input-field col s6">
                <i className="material-icons prefix">account_circle</i>
                <input
                  id="name"
                  type="text"
                  className="validate"
                  value={user.name}
                  placeholder="Enter Name"
                  onChange={onChange}
                />
              </div>
              <div className="input-field col s6">
                <i className="material-icons prefix">account_circle</i>
                <input
                  id="username"
                  type="text"
                  className="validate"
                  value={user.username}
                  placeholder="Enter Name"
                  onChange={onChange}
                />
              </div>
              <div className="input-field col s6">
            <i className="material-icons prefix">email</i>
            <input
                  id="email"
                  type="email"
                  className="validate"
                  value={user.email}
                  placeholder="Enter email"
                  onChange={onChange}
                />
            </div>
              <div className="input-field col s6">
                <i className="material-icons prefix">phone</i>
                <input
                  id="phone"
                  type="tel"
                  value={user.phone}
                  className="validate"
                  placeholder="Enter Phone"
                  onChange={onChange}
                />
                <a

                  className="waves-effect waves-light right btn m-1"
                  onClick={() => clear()}
                >
                  clear
                </a>
                <a
                  className="waves-effect waves-light btn m-1"
                  onClick={() => addUser()}
                >
                  Add
                </a>
              </div>
            </>
          }
        </MyModal>
        <div className="row m-1">
          <div className="col s4">
            <a
              className="waves-effect waves-light btn"
              onClick={() => setshowModal(true)}
            >
              Add user
            </a>
          </div>
          <div className="col s8"></div>
        </div>
        {loading ? (
          <Loader
            className="loader-center"
            type="BeatLoader	"
            color="#ee6e73"
            height={100}
            width={100}
            timeout={delay} //3 secs
          />
        ) : (
          <UserList search deleteUser={removeUser}>
            {users}
          </UserList>
        )}
      </div>
    </div>
  );
};

export default Users;