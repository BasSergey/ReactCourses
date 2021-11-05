import React, { useEffect, useState } from "react";

const UserList = (props) => {
  const [filter, setFilter] = useState(props.children);

  useEffect(() => {
    //хук появляется сразу после загрузки страницы
    setFilter(props.children); //присваивает
  }, [props.children]); //за чем будем следить

  const getSearch = () => {
    if (filter) {
      //если данный в fiter ест
      return filter;
    }
    return props.children;
  };
  const userSearch = getSearch();
  const onChange = (e) => {
    // console.log(e.target.value)
    setFilter(
      props.children.filter((user) =>
        user.email.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  }; //перебирание пользоватей с выводом в консоль(до сейчас setFilter ), toLowerCase() для того чтобы в независимости от высокого низкого текста, он выводился
  //Если мы юы хотели написать все выше в нельсколько строк, то нужно было бы ((user)=>{return .... }

  return (
    <>
      {props.search && (
        <div className="row">
          <div className="inpyut-field col s6">
            <i className="material-icons prefix">search</i>
            <textarea
              id="icon_prefix2"
              className="materialize-textarea"
              onChange={onChange}
              placeholder="Search by name"
            ></textarea>
          </div>
        </div>
      )}
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Username</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Delete</th>

          </tr>
        </thead>

        <tbody>
          {props.children &&
            filter.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.phone}</td>
                <td>{user.email}</td>
                <i
                  className="material-icons"
                  onClick={() => props.deleteUser(user.id)}
                >
                  delete
                </i>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
};

export default UserList;
