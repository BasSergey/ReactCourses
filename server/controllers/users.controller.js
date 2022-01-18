//!https://metanit.com/web/nodejs/7.1.php
//! ПАТТЕРН MVC
//!КОНТРОЛЛЕР
//! это все ранее было в server.js немного поменяли, убрали ('/users')...
//! было const User = require("../models/UserModel.js");

const db = require('../models/index.js');
const User = db.users;  //! стало. Берем из index db.users

exports.getAll = (req, res) => {  //!получает все
  // res.send(User.getAll())  //!ответ БЫЛО
  User.findAll({ raw: true }).then((users) => { //! raw:true чтобы в массиве данных приходило. Как если бы делали простой запрос в mysql(в консоли)
    res.send(users)  //!ответ БЫЛО
  }).catch(err=>console.log(err))
  // console.log('ЗАШЛО В getAll()_________________________')
}

exports.addUser = (req, res) => {   //! добавляет, получаем эти данные из request 51строка в Users,jsx
  // users.push(req.body)//!чтобв бэк хранил данные, но в идеале нужна база данных
  // res.send(users) 

  const user = req.body
  User.create(user).then((users)=>{
    res.send(users) 
  }).catch(err=>console.log(err))
  // const user = new User(req.body); //! было
  // user.save(); //! было
  // res.send(User.getAll()); //! было

}

// exports.deleteUser = (req, res) => {  //!удаление

//   const user = req.body
//   User.destroy({where:{id:id}}).then((users)=>{
//     res.send('DELETED') 
//   }).catch(err=>console.log(err))
// }


exports.deleteUser = (req,res) => { //DELETE FROM users WHERE name=?
 
  // users = users.filter((user)=> user.id !== +req.params.id) //!+ для преобразования строки(indetification который выводится в консоль) в int. Сравниваем id c id
 // User.delete(+req.params.id);
 // res.send(User.getAll()); //! было

  const id = +req.params.id
  User.destroy({
      where: {
       id: id
      }
    }).then(() => {
      res.send('DELETED');
    });
}


//? https://metanit.com/web/nodejs/9.3.php
  //TODO сделать такую же штуку с devices. Добавить добавление удаление + изменение