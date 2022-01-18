const Emitter = require("events");
let emitter = new Emitter();
let name = " " ;
let eventName = "greet";

    emitter.on(eventName, function(data){
        console.log("Hello all!"+data);
       return name = data;
    });
     
    emitter.emit(eventName, 'Sergey');

module.exports.getName= ()=>{
    return name;
}