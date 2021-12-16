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
const express = require('express')
const app = express()
// const http = require("http");
const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT
const cors = require('cors');
const bodyParser = require('body-parser')

let users =[{name:'Sergey', id:1},{name:'Suslik',id:2},{name:'Banan',id:3}]
app.use(bodyParser.json())
// app.use(function (req, res, next) { //!use дополняет express, расширяет возможности express. Он промежуточный
//     // Website you wish to allow to connect
//     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

//     // Request methods you wish to allow
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); //! Методы http

//     // Request headers you wish to allow
//     res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, applications/json');

//     // Set to true if you need the website to include cookies in the requests sent
//     // to the API (e.g. in case you use sessions)
//     res.setHeader('Access-Control-Allow-Credentials', true);

//     // Pass to next layer of middleware
//     next();
// });
//* вместо всего выше можно использовать библитотеку cors (https://stackoverflow.com/questions/18310394/no-access-control-allow-origin-node-apache-port-issue), только не решил проблему с bodyParser.json()  
app.use(cors({ origin: 'http://localhost:3000'}));


app.get('/users',(req, res)=>{
    res.send(users)
})
app.post('/users',(req, res)=>{ //! добавляет, получаем эти данные из request. 51строка в Users,jsx
    console.log(req.body);
    res.send(users)
})

app.listen(PORT, () =>{
    console.log(`Example app listening at http://localhost:${PORT}`);
})


