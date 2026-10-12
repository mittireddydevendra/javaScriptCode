const name = 'John';  
console.warn(`Don't mess with me ${name}! Don't mess with me!`);   

const os =require('os');
console.log("os.cpus():\n",os.cpus());
console.log("os.arch():\n",os.arch());
console.log("os.networkInterfaces(): \n",os.networkInterfaces());

setInterval(function(){
    console.log("setInterval: Hey! 1 millisecond completed!...");
},1000);

setTimeout(function(){
 console.log("Hello")
},1000)

setImmediate(function(){
    console.log("hi")
},1000)