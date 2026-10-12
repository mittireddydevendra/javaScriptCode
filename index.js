// const asyn = require('./components/async')
// const express =require("express")
// const app = express()
// const port =3000;

// const firstHandler =((req,res,next)=>{
//     if(10>20){
//         next()
//     }
//  })

// app.get('/home',firstHandler,(req,res)=>{
//     res.send("Hello, i am home page")
// })
//  //middleware use
// app.use((req,res,next)=>{
//     if(10<20){
//         next() //staus is pending
//     }
// })

// app.listen(port,()=>{
//     console.log("Server start  and runing succesfully!")
// })


// // 2. Promises (ES6+)
// // const fetchDataPromise = () => {
// //   return new Promise((resolve) => {
// //     setTimeout(() => resolve('Promise resolved!'), 1000);
// //   });
// // };
// // async function App(){
// //   const result = await fetchDataPromise();
// //   console.log(result);
// // }
// // App();

import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"

const app = express();
dotenv.config();

const PORT =process.env.PORT || 7000;
const MONGOURL = process.env.MONGO_URL;

mongoose.connect(MONGOURL).then(()=>{
    console.log("Database is connected successfully.")
    app.listen(PORT, ()=>{
        console.log(`Server is running on port ${PORT}`);
    });
}).catch((error)=>console.log(error));

const userSchema =new mongoose.Schema({
    name: String,
    age: Number,
});

const UserModel = mongoose.model("users", userSchema)

app.get("/getUsers", async(req,res)=>{
    const userData = await UserModel.find();
    res.json(userData)
});