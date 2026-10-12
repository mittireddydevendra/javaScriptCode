var i =0;
console.log(i);
setInterval(function(){
    i++;
    console.log(i);
},1000);

var recursive = function(){
    console.log("hello! 1000 millisecond completed!...");
    setTimeout(recursive,1000);
}
recursive();

try{
    const a = 1;
    const c =a + b;
}catch(err){
    console.log(err);
}

const dns = require('dns');
dns.lookup('www.javatpoint.com',(err,addresses,family)=>{
    console.log(addresses);
    console.log('family:',family); 
})

var fs = require("fs");
var data ='';
var readerStream =fs.createReadStream('input.txt');
readerStream.setEncoding('UTF8');
readerStream.on('data',function(chunk){
    data += chunk;
});

readerStream.on('end',function(){  
   console.log(data);  
})
readerStream.on('error', function(err){  
   console.log(err.stack);  
});  
console.log("Program Ended");  

var fs = require("fs");  
var data = fs.readFileSync('input.txt');  
console.log(data.toString());  
console.log("Program Ended");   