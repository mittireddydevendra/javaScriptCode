const myPromise = Promise.resolve("Hello, Welcome to TpointTech!");
myPromise.then(message =>{
    console.log(message);
})

Promise.all([
    Promise.resolve("Task 1 completed"),
    Promise.reject("Task 2 failed")
])
 .then((results)=>console.log(results))
 .catch((error)=>console.log(error));

 const interval = setInterval(()=>{
    console.log("runnig")
 },1000)

 setTimeout(()=>{
    clearInterval(interval)
    console.log("stop")
 },5000)