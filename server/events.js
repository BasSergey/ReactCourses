const Emitter = require("events");
let emitter = new Emitter();
let eventName = "greet";
emitter.on(eventName, function(data){
    console.log("Hello all!"+data);
});
 
emitter.on(eventName, function(data, hi){
    console.log("HI!"+data+hi);
});
 
emitter.emit(eventName, 'from Sergey','doremi');