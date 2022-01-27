// const crypto = require('crypto')
// const start = Date.now()
// //! это и ессть событийно ориентированая система. Она сама решает какая операция нужна
// crypto.pbkdf2('123ttt','5', 1000000, 64, 'sha512',()=>{
//     console.log('1 end', Date.now() - start);
// })
// //первый поток

// crypto.pbkdf2('123ttt','5', 1000000, 64, 'sha512',()=>{
//     console.log('2 end', Date.now() - start);
// })
// // второй поток 

// crypto.pbkdf2('123ttt','5', 1000000, 64, 'sha512',()=>{
//     console.log('3 end', Date.now() - start);
// })
// // третий поток 

// crypto.pbkdf2('123ttt','5', 1000000, 64, 'sha512',()=>{
//     console.log('4 end', Date.now() - start);
// })
// // 4 поток 

// crypto.pbkdf2('123ttt','5', 1000000, 64, 'sha512',()=>{
//     console.log('5 end', Date.now() - start);
// })
// //Сначала отрабатывают самые быстрые из первых 4, а потом только те которые идут после 4
// // 5 поток 

//!HTTTP
//!  
// const http = require("http");
// const dotenv = require("dotenv");
// dotenv.config();
// const PORT = process.env.PORT

// http.createServer(function(req,res){

//     // response.end();

//     res.writeHead(200, {
//         'Content-Type':'application/json'
//     })
//     res.end(JSON.stringify({id:1, name:'Sergey'})) //!отправка данных для фронта

// }).listen(PORT, process.env.HOST,function(){
//     console.log(`Сервер начал прослушивание запросов на порту ${PORT}`);
// });
//!EXPRESS
//*этот все  
// const express = require('express')
// const app = express()
// // const http = require("http");
// const dotenv = require("dotenv");
// dotenv.config();
// const PORT = process.env.PORT
// const cors = require('cors');
// const bodyParser = require('body-parser')

// let users =[{name:'Sergey', id:1},{name:'Suslik',id:2},{name:'Banan',id:3}]
// app.use(bodyParser.json())
// app.use(function (req, res, next) {
//     // Website you wish to allow to connect
//     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

//     // Request methods you wish to allow
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); 

//     // Request headers you wish to allow
//     res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, applications/json');

//     // Set to true if you need the website to include cookies in the requests sent
//     // to the API (e.g. in case you use sessions)
//     res.setHeader('Access-Control-Allow-Credentials', true);

//     // Pass to next layer of middleware
//     next();
// });
//! Терминология 
//! process - обьект, с помощью которого можно получить текущий процесс  
//! process.env.PORT переменные окружения   
//! process.exit() можно завершать процесс
 
const express = require("express"); 
const bodyParser = require("body-parser"); 
const app = express(); 
const dotenv = require('dotenv'); 
dotenv.config(); //! мы импортировали и подкл файл .env 
const PORT = process.env.PORT 
const userRouter = require('./routes/userRouter')
const computerRouter = require("./routes/computerRouter")
const deviceRouter = require('./routes/deviceRouter')
const db = require('./models/index'); //! для рабоыт с базой данных 
const authRouter = require("./routes/authRouter");

db.sequelize.sync();
app.use(bodyParser.json())  //!use дополняет express, расширяет возможности express. Он промежуточный
app.use(function(req, res, next) { 
  res.header("Access-Control-Allow-Origin", "http://localhost:3000"); 
  res.header("Access-Control-Allow-Headers", "auth, Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"); 
  res.header('Access-Control-Allow-Credentials', 'true') 
  res.header("Access-Control-Allow-Methods" , "GET,POST,PUT,DELETE,OPTIONS");  //! Методы http
  next(); 
  }); 

  app.get('/posts', (req, res) => { 
    res.send([{userId:1, postBody:'Dont say goobay la la la!'}]) 
  }) 

  app.get('/posts', (req, res) => { 
    res.send([{computerId:1, postBody:'Dont say goobay la la la!'}]) 
  }) 

app.use('/users', userRouter);
app.use('/', authRouter)

app.use('/computers',computerRouter);


app.listen(PORT, () => { 
  console.log(`Сервер начал прослушивание запросов на порту http://localhost:${PORT}`) 
})
// app.use('/devices',deviceRouter); 


// app.get('/users', (req, res) => {  //!получает
//     res.send(users)  //!ответ
//   }) 
// app.post('/users', (req, res) => {   //! добавляет, получаем эти данные из request 51строка в Users,jsx
//     console.log(req.body); 
//     res.send(users) 
//     users.push(req.body)//!чтобв бэк хранил данные, но в идеале нужна база данных
//   }) 
// app.delete('/users:indetification', (req, res) => {  //!удаление
//     console.log(req.params); 
//    users = users.filter((user)=> user.id !== +req.params.id) //!+ для преобразования строки(indetification который выводится в консоль) в int. Сравниваем id c id
//     res.send(users);
//   }) 
// app.get('/posts', (req, res) => { 
//     res.send([{userId:1, postBody:'Dont say goobay la la la!'}]) 
//   }) 





