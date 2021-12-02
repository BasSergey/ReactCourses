// const crypto = require('crypto')
// const start = Date.now()

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
// //! это и ессть событийно ориентированая система. Она сама решает какая операция нужна

const http = require("http");
const hello = require("./hello");
const date = require("./date.js")
const name = require("./name.js")


http.createServer(function(request,response){
     
    response.end(date.getDate() + name.getName());
     
}).listen(3000, "127.0.0.1",function(){
    console.log("Сервер начал прослушивание запросов на порту 3000");
});