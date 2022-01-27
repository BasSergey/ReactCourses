const db = require('../models/index.js');
const Computer = db.computers;  //! стало. Берем из index db.users

exports.getAll = (req, res) => {  //!получает все
  // res.send(User.getAll())  //!ответ БЫЛО
  Computer.findAll({ raw: true }).then((computers) => { //! raw:true чтобы в массиве данных приходило. Как если бы делали простой запрос в mysql(в консоли)
    res.send(computers)  //!ответ БЫЛО
  }).catch(err=>console.log(err))
  // console.log('ЗАШЛО В getAll()_________________________')
}

exports.addComputer = (req, res) => {   //! добавляет, получаем эти данные из request 51строка в Users,jsx
  const computer = req.body
  Computer.create(computer).then((computers)=>{
    res.send(computers) 
  }).catch(err=>console.log(err))
}

exports.updateComputer = (req, res) =>{
    const id = +req.params.id 
    Computer.update({
        where: {
          id: id
        }
      }).then((res) => {
        console.log(res);
      });
}

exports.deleteComputer= (req,res) => { //DELETE FROM users WHERE name=?
  const id = +req.params.id
  Computer.destroy({
      where: {
       id: id
      }
    }).then(() => {
      res.send('DELETED');
    });
}

exports.getOne = (req, res) =>{
    Computer.findOne({where: {id: id}})
    .then(computer=>{
        if(!computer) return;
        console.log(computer.name, computer.id);
    }).catch(err=>console.log(err));
}


//? https://metanit.com/web/nodejs/9.3.php
  //TODO сделать такую же штуку с devices. Добавить добавление удаление + изменение