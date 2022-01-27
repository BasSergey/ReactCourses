//! этот файл запысывет все с бд
const Sequelize = require("sequelize");
const sequelize = new Sequelize("nodedb", "root", "serGa13#", {
  dialect: "mysql",
  host: "localhost",
  define: {
    timestamps: false
  }
});
db = {};
db.sequelize = sequelize;//!подключение от базы данныз
db.Sequelize = Sequelize;
db.users = require('./UserModel')(sequelize,Sequelize); //!передаем sequelize,Sequelize
db.computers = require('./ComputerModel')(sequelize,Sequelize); //!передаем sequelize,Sequelize

module.exports = db;
//!Таким образом объект db доступен в любом месте проекта. В данном файле мы делаем всю настройку касающуюся базы данных
