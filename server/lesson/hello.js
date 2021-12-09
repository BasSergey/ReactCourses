let currentDate = new Date();



module.exports.getMessage = (name) =>{ //тип как в реакте export default
    let hour = currentDate.getHours();
    if(hour > 16)
    return "Good night, " + name;
else if(hour > 10)
    return "Good day, " + name;
else
    return "Good morning, " + name;

}



