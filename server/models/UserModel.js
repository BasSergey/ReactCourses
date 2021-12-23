let users = [ 
    { name: 'Joseph', id:1, phone:25323232 }, 
    { name: 'Marish', id:2, phone:25323232 }, 
    { name: 'Johni', id:3, phone:25323232 }, 
  ] 
module.exports = class User{
 
    constructor(user){ //!метод для создания пользователя
        this.name = user.name;
        this.id = user.id;
        this.phone = user.phone;
        
    }
    save(){
        users.push(this);
    }
    static delete(id){ //!модель для удаления
        users = users.filter((user)=> user.id !== id)
    }
    static getAll(){ //!для получения пользователя
        return users;
    }
}