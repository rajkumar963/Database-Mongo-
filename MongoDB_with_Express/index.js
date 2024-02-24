const express=require("express");
const app=express();
const mongoose=require("mongoose");
const path=require("path");

app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");

main().then(() =>{
     console.log('connection successful');
 })
.catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');// use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}


app.get("/",(req,res)=>{
    res.send("hello world");
});

app.listen(3000,()=>{
    console.log("server is running on port 3000");
});