console.log('start');
function greet(name,cd){
    setTimeout(()=>{
        cd(`Hello ${name}!`)
    },0);
}
console.log('before greet');
greet('Max',(greeting)=>{
    console.log(greet)
});
console.log('end');