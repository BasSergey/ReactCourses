
module.exports = (sequelize, Sequelize) => {
    const Computer = sequelize.define("computer", {  //!user нужно указывать в ед числе(даже если таблица в бд называется users)
        id: {
            type: Sequelize.INTEGER,//! все это по типу синтаксису mysql. Тут оно чуть по другмоу преобразовано
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: Sequelize.STRING,
        },
        phone: {
            type: Sequelize.INTEGER,
        },
        cpu: {
            type: Sequelize.STRING
        },
        hard_memory:{
            type: Sequelize.STRING
        },
        video:{
            type: Sequelize.STRING
        },
        ram:{
            type: Sequelize.STRING
        }
    });

    return Computer

}
//!Это модель пользователя в который мы указываем тип данных