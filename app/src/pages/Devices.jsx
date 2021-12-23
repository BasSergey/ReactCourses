import React, { useEffect, useState } from "react";
import { devicesValue } from "../components/DevicesItem";
import index from "../index.css"
import http from "../http";

const Devices = () => {
  const [phones, setPhones] = useState(null);
  const [devices, setDevices] = useState(null);

  // const setPhones = async()=>{
  //   const devices = await http.get('/devices');
  //   setDevices(devices.data)
  // }
  //TODO сделать на подобии User.jsx. Проблема с переменными phones и их выводом

  useEffect(() => {
    setPhones(devicesValue)
  }, [])
  const value = [
    "Apple",
    "Samsung",
    "Huawei",
    "Nokia"
  ];
  const onChange = (e) => {
    if (e.target.value == "") {
      setPhones(devicesValue)
      return
    }
    console.log(e.target.value);
    setPhones(devicesValue.filter((phone) => phone.brand == e.target.value))
  };

  const deleteDevices = (id) => {
    const confirm = window.confirm("Реально удалить?");
    if (confirm == true) {
      http.delete(`/devices/${id}`).then((res) => {//! работает с бэк server.js.  (`/users/${id}`)передаем с id
        console.log(res);
        setDevices(devices.filter((device) => device.id !== id))
      }).catch((err) => console.log(err))
    }; //для проверки на удаление
  };


  return (
    <div className="container">
      <h3>ALL Devices</h3>
      <label>Browser Select</label>
      <div>
        <select onChange={onChange} className="browser-default" >
          <option value=""  >
            Choose brand phone
          </option>
          {value.map((key) => (
            <option key={key} value={key}>{key} </option>
          ))}
          {/* <option value="1">Samsung</option>
        <option value="2">Apple</option>
        <option value="3">Nokia</option>
        <option value="4">Huawei</option> */}
        </select>
      </div>


      <table>
        <thead>
          <tr>
            {Object.keys(devicesValue[0]).map((field) => (   /*Object.keys когда хотим получить поля*/
              <th key={field}>{field}</th>
            ))}

            {/* <th>Name</th>   это равно сверху
            <th>Phone</th>
            <th>Delete</th> */}
          </tr>
        </thead>

        <tbody>
          {phones && phones.map((device) => ( /* если фонс есть ток*/
            <tr key={device.id}>
              <td>{device.id} </td>
              <td>{device.name}</td>
              <td>{device.brand}</td>
              <td>{device.description}</td>
              <td>{device.price}</td>
              <i className="material-icons"
                onClick={() => deleteDevices(device.id)} 
                >delete</i>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

  );
};
export default Devices;
