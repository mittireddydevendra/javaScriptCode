/* Built in function: os, path, fs, http
   fs module in node.js 
   Create folder or File , read files, renaming files,
   Deleting files
*/
const os = require('os')

console.log(os.type())
console.log(__dirname)
console.log(__filename)
 
const fs = require('fs')

fs.readFile("Node.txt", 'utf8',(err,data)=>{
    if(err){
        console.log(err)
    }
    console.log(data)
})

fs.writeFile("Nod.txt","Built in function: os, path, fs, http",(err)=>{
    if(err){
        console.log(err)
    }
    console.log("File writen successfully", data)
})

fs.unlink('note file.js',(err)=>{
    console.log("")
})