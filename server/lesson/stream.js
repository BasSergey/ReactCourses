const fs = require('fs')
const path = require('path')
const http = require('http')

// для чтения файла
// fs.readFile(path.resolve(__dirname, 'test.txt'),(err,data)=>{ //(err,data) callback
//     if(err){
//         throw err;
//     }
//     console.log(data);

// })

//! createReadStream читает по потокам
// const stream = fs.createReadStream(path.resolve(__dirname, 'test.txt'))

// stream.on('data', (chunk)=>{
//     console.log(chunk);
// })

// stream.on('end', ()=>console.log('Закончили читать'))
// stream.on('open', ()=>console.log('Начали читать'))
// stream.on('error', (err)=>console.log(err))



// !createWriteStream процесс записи
// const writableStream = fs.createWriteStream(path.resolve(__dirname, 'test2.txt'))
// for(let i = 0 ; i<20; i++){
//     writableStream.write(i+'\n');
// }
// writableStream.on('error', (err)=>console.log(err))





//! для передачи данных из одного потока в другой PIP. Может делать связь между потоками. Так же для того чтобы проверять прошли ли все потоки для пользователя(так как они выполн быстрее, чем пользоваетль их получает).