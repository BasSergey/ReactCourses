// let users = [ 
//     { name: 'Joseph', id:1, phone:25323232 }, 
//     { name: 'Marish', id:2, phone:25323232 }, 
//     { name: 'Johni', id:3, phone:25323232 }, 
//   ] 
// module.exports = class User{

//     constructor(user){ //!метод для создания пользователя
//         this.name = user.name;
//         this.id = user.id;
//         this.phone = user.phone;
//     }
//     save(){
//         users.push(this);
//     }
//     static delete(id){ //!модель для удаления
//         users = users.filter((user)=> user.id !== id)
//     }
//     static getAll(){ //!для получения пользователя
//         return users;
//     }
// }
//!было сверху
//! стало снизу благодаря sequelize. Оно помогает взаимодействовать более быстрым и простым способом с бд
//? https://metanit.com/web/nodejs/9.2.php 

module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {  //!user нужно указывать в ед числе(даже если таблица в бд называется users)
        id: {
            type: Sequelize.INTEGER,//! все это по типу синтаксису mysql. Тут оно чуть по другмоу преобразовано
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: Sequelize.STRING,
        },
        phone: {
            type: Sequelize.STRING,
        }
    });
    return User
}
//!Это модель пользователя в который мы указываем тип данных
