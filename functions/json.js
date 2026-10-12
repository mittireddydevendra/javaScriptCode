//JavaScript to illustrate JSON.parse() method.    
var j = '{"Name":"Krishna","Email": "XYZ", "CN": "12345"}';    
var data = JSON.parse(j);    
console.log("Convert string in JSON format using parse() method");    
console.log(data);   
    
//JavaScript to illustrate JSON.stringify() method.    
var j = {Name:"Krishna",    
Email: "XYZ", CN : 12345};    
var data = JSON.stringify(j);    
console.log("Convert string in JSON format using stringify()  method");    
console.log(data);   

//setInterval(): Used to excute a function repeatedly 
// at a specified time interval

setInterval(()=>{
    console.log("hello after 1 seconds")
},1000)

//SetTime(): 
// Used to execute a function once after a specified delay.
setTimeout(()=>{
   console.log("Hello")
},3000)

var a;   
a = setInterval(fun, 3000);   
function fun() {  
alert(" Welcome to the TpointTech.com ");  
}