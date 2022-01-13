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
//! для того чтобы мы могли этим обьектом везде использовать(если вдруг будет несколько бд и нужно будет где то из выщывать)
db.users = require('./UserModel')(sequelize,Sequelize); //!передаем sequelize,Sequelize
module.exports = db;