import React, { useState } from "react";
import UserList from "../components/UserList";
import MyModal from "../components/MyModal/MyModal"

const Users = () => {
  const [showFormUser, setShowFormUser] = useState(false);
  const [users, setUsers] = useState([
    {
      id: 1,
      name: 'John',
      phone: '7788'
    },
    {
      id: 2,
      name: 'Thanos',
      phone: '50%'
    },
    {
      id: 3,
      name: 'Boris',
      phone: '5467'
    },
  ]);
  const [user, setUser] = useState(
    {
      name: '',
      phone: '',
    });

  const onChange = (e) => {
    if (e.target.id == "name") {
      setUser({ ...user, name: e.target.value });
    } else {
      setUser({ ...user, phone: e.target.value });
    }
  }

  const addUser = () => {
    const id = Math.random() * 1
    setUser({ ...user, id: id })
    setUsers([...users, user]);
    setUser({
      name: '',
      phone: '',
    });
  }

  const removeUser = (id) => {
    const confirm = window.confirm("Реально удалить?")
    if (confirm == true) setUsers(users.filter((user) => user.id !== id)) //для проверки на удаление  
  };
  const clear = () => {
    setUser({ name: '', phone: '' })
  }
  console.log(user);
  const [showModal, setshowModal] = useState(false)




  return (
    <div className="App">

      <div className="container">
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
                   <a className="waves-effect waves-light btn m-1"
                     onClick={() => addUser()}>Add</a>
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
                   <a className="waves-effect waves-light right btn m-1"
                     onClick={() => clear()}>Cancel</a>
                 </div>
               </>
          }
        </MyModal>
        <div className="row m-1">
          <div className="col s4">
            <a className="waves-effect waves-light btn"
              onClick={() => setshowModal(true)}
            >
              Add user
            </a>
          </div>
          <div className="col s8">
            
          </div>
        </div>
        <UserList search deleteUser={removeUser}>{users}</UserList>

      </div>
    </div>
  );
}

export default Users;
