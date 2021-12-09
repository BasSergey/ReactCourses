const fs = require('fs')
const path = require('path')

//!path - путь к файлу
//!data - содержимое файла

//! CRUD 
const writeFileAsync = async (path, data) => {
    return new Promise((resolve, reject) => fs.writeFile(path,data, (err) => {
        if(err) {
            return reject(err.message)
        }
        resolve()
    }))
}


const appendFileAsync = async (path, data) => {
    return new Promise((resolve, reject) => fs.appendFile(path, data, (err) => {
        if(err) {
            return reject(err.message)
        }
        resolve()
    }))
}

const readFileAsync = async (path) => {
    return new Promise((resolve, reject) => fs.readFile(path, {encoding: 'utf-8'}, (err, data) => {
        if(err) {
            return reject(err.message)
        }
        resolve(data)
    }))
}
const removeFileAsync = async (path) => {
    return new Promise((resolve, reject) => fs.rm(path, (err) => {
        if(err) {
            return reject(err.message)
        }
        resolve()
    }))
}

writeFileAsync(path.resolve(__dirname, 'test.txt'), 'data') //!эти данные передаются в path и date
    .then(() => appendFileAsync (path.resolve(__dirname, 'test.txt'), '123'))   //!запись в файл
    .then(() => readFileAsync(path.resolve(__dirname, 'test.txt')))
    // .then(() => removeFileAsync(path.resolve(__dirname, 'test.txt'))) //!удаляет
    .then((data)=>console.log(data))
    .catch(err => console.log(err))


//*TODO Через переменную окружения передать строку, записать ее в файл
//*TODO прочитать файл, посчитать кол-во слов в файле и записать
//*TODO их в новый файл count.txt, затем удалить первый файл 

const text = process.env.TEXT || '';

writeFileAsync(path.resolve(__dirname, 'text.txt'), text)
    .then(() => readFileAsync(path.resolve(__dirname, 'text.txt')))
    .then(data => data.split(' ').length)
    .then(count => writeFileAsync(path.resolve(__dirname, 'count.txt'), `Кол-во слов ${count}`))
    .then(() => removeFileAsync(path.resolve(__dirname, 'text.txt')))

    
    // !then() нужен для сокращает код, чтобы не писать как в https://github.com/utimur/node-js-fundamental/blob/master/lessons/file-system.js закомент код сверху