const format = require('date-format');

module.exports.getDate = () =>{
    // console.log(format('dd:mm:yy', new Date()))
    return format('dd:mm:yy', new Date())
}
// console.log(date());

