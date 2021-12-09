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


const http = require("http");
const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT

http.createServer(function(req,res){

    // response.end();

    res.writeHead(200, {
        'Content-Type':'application/json'
    })
    res.end(JSON.stringify({id:1, name:'Sergey'})) //!отправка данных для фронта

}).listen(PORT, process.env.HOST,function(){
    console.log(`Сервер начал прослушивание запросов на порту ${PORT}`);
});