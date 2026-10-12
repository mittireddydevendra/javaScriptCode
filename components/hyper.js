
const http =require('http')
const myServer =http.createServer((request,response)=>{
  response.write("welcome to Node JS Tutorials")
  response.end()
})
myServer.listen(3000)

const http = require('https')
const mserver =http.createServer((req,res)=>{
    res.write("welcome")
    res.end()
})
mserver.listen(5000)