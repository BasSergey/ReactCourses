import React, { useEffect, useState } from "react";
import { devices } from "../components/DevicesItem";
import index from "../index.css"

const Devices = () => {
    const [phones, setPhones] = useState(null);
    useEffect(()=>{
        setPhones(devices)
    },[])
    const value=[
         "Apple",
         "Samsung",
         "Huawei",
         "Nokia"
    ];
    const onChange=(e)=>{
        if(e.target.value =="") {setPhones(devices)
        return
    }
        console.log(e.target.value);
        setPhones(devices.filter((phone) => phone.brand == e.target.value))
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
         {value.map((key)=>(
            <option key={key} value={key}>{key}</option>
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
            {Object.keys(devices[0]).map((field) => (   /*Object.keys когда хотим получить поля*/
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
              <td>{device.id}</td>
              <td>{device.name}</td>
              <td>{device.brand}</td>
              <td>{device.description}</td>
              <td>{device.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    
  );
};
export default Devices;
