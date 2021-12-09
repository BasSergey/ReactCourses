const path = require('path')

// __dirname, __filename -глобальные переменные абсолютный путь к текущему файлу
// Buffer мество где временно хранится 
console.log('Склеить участки пути',path.join(__dirname , 'first', 'second', 'third'));
