//!https://metanit.com/web/nodejs/7.1.php
//! ПАТТЕРН MVC
//!КОНТРОЛЛЕР
//! это все ранее было в server.js немного поменяли, убрали ('/users')...

const User = require("../models/UserModel.js");
 exports.getAll= (req, res) => {  //!получает все
    res.send(User.getAll())  //!ответ
  }
exports.addUser=(req, res) => {   //! добавляет, получаем эти данные из request 51строка в Users,jsx
    // users.push(req.body)//!чтобв бэк хранил данные, но в идеале нужна база данных
    // res.send(users) 

    const user = new User(req.body);
    user.save();
    res.send(User.getAll());
  }
exports.deleteUser = (req, res) => {  //!удаление
    // users = users.filter((user)=> user.id !== +req.params.id) //!+ для преобразования строки(indetification который выводится в консоль) в int. Сравниваем id c id
    User.delete(+req.params.id);
    res.send(User.getAll());
  }



  //TODO сделать такую же штуку с devices. Добавить добавление удаление + изменение