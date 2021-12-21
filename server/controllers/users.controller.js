//!https://metanit.com/web/nodejs/7.1.php
//! ПАТТЕРН MVC
//!КОНТРОЛЛЕР
//! это все ранее было в server.js немного поменяли, убрали ('/users')...

let users = [ 
    { name: 'Joseph', id:1, phone:25323232 }, 
    { name: 'Marish', id:2, phone:25323232 }, 
    { name: 'Johni', id:3, phone:25323232 }, 
  ] 
 exports.getAll= (req, res) => {  //!получает все
    res.send(users)  //!ответ
  }
  exports.addUser=(req, res) => {   //! добавляет, получаем эти данные из request 51строка в Users,jsx
    console.log(req.body); 
    users.push(req.body)//!чтобв бэк хранил данные, но в идеале нужна база данных
    res.send(users) 
  }
  exports.deleteUser = (req, res) => {  //!удаление
    users = users.filter((user)=> user.id !== +req.params.id) //!+ для преобразования строки(indetification который выводится в консоль) в int. Сравниваем id c id
    console.log(users); 
    res.send(users);
  }
  