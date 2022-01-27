import React, { useEffect, useState } from "react";

const ComputerList = (props) => {
  const [filter, setFilter] = useState(props.children);
   console.log(props.children) 
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
  const computerSearch = getSearch();
  const onChange = (e) => {
    // console.log(e.target.value)
    setFilter(
      props.children.filter((computer) =>
      computer.name.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  }; 
  const [update, setUpdate] = useState({
    id: null,
    value: ''
  })

  const submitUpdate = value => {
    update(update.id, value);
    setUpdate({
      id: null,
      value: ''
    });
  };
  if (update.id) {
    return <div edit={update} onSubmit={submitUpdate} />;
  }

  return (
    <>
      {props.search && (
        <div className="row">
          <div className="inpyut-field col s6">
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
            <th>Id</th>
            <th>Name</th>
            <th>Cpu</th>
            <th>Hard_memory</th>
            <th>Video</th>
            <th>Ram</th>


          </tr>
        </thead>

        <tbody>
          {props.children &&
            filter.map((computer) => (
              <tr key={computer.id}>
                <td>{computer.id}</td>
                <td>{computer.name}</td>
                <td>{computer.cpu}</td>
                <td>{computer.hard_memory}</td>
                <td>{computer.video}</td>
                <td>{computer.ram}</td>
                <i
                  className="material-icons"
                  onClick={() => props.deleteComputer(computer.id)}
                >
                  delete
                </i>
                <i
                  className="material-icons"
                  onClick={() => setUpdate(computer.id)}
                >
                  create
                </i>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
};

export default ComputerList;