const mysql = require("mysql2")
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "nodedb",
    password: "serGa13#"
  });
  connection.connect(function(err){
    if (err) {
      return console.error("Ошибка: " + err.message);
    }
    else{
      console.log("Подключение к серверу MySQL успешно установлено");
    }
 });
//!СОЗДАНИЕ таблицы 
//   const sql = `create table devices(
//     id int primary key auto_increment,
//     name varchar(255),
//     brand varchar(255),
//     description varchar(255),
//     price varchar(255)
//   )`;
//   connection.query(sql, function(err, results) {
//       if(err) console.log(err);
//       else console.log("Таблица создана");
//   });
//! *********************************************
//!ЗАПИСЬ ДАННЫХ В БАЗУ ДАННЫХ 
//  const devices = [
//     ['1',"Samsung123","Samsung", 'cooldevices','500'],
//     ['2',"Apple123", "Apple", 'ok','1000'],
//     ['3',"Lenovo123","Lenovo" , 'bad','400']
//   ];
// const sql = "INSERT INTO devices(id, name, brand, description, price) VALUES ?";
// connection.query(sql, [devices], function(err, results) {
//     if(err) console.log(err);
//     else console.log("Данные добавлены");
// });
 //! *********************************************
//!ОБНОВЛЕНИЕ ДАННЫХ В БАЗЕ ДАННЫХ 
// const sql = `UPDATE devices SET id=? WHERE name=?`;
// const data = ["1254234", "Samsung123"];
// connection.query(sql, data, function(err, results) {
//     if(err) console.log(err);
//     console.log(results);
// });
//! *********************************************
//!УДАЛЕНИЕ ДАННЫХ В БАЗЕ ДАННЫХ 
// const sql = "DELETE FROM devices WHERE name=?";
// const data = ["Samsung123"]; // удаляем пользователей с именем Sam
// connection.query(sql, data, function(err, results) {
//     if(err) console.log(err);
//     console.log(results);
// });
//! *********************************************
//   connection.query("SELECT * FROM devices",
//   function(err, results, fields) {
//     console.log(err)
//     console.log(results); // собственно данные
//     console.log(fields); // мета-данные полей 
//  });
// connection.end();

 //? https://metanit.com/web/nodejs/8.1.php
 //? https://metanit.com/web/nodejs/8.2.php
 //? https://metanit.com/web/nodejs/8.4.php