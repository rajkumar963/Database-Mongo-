const express=require("express");
const app=express();
const mongoose=require("mongoose");
const path=require("path");
const Chat=require("./models/chat.js");

app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");
app.use(express.static(path.join(__dirname,"public")));

main()
.then(() =>{
     console.log('connection successful');
 })
.catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');// use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

//Index Route:---

app.get("/chats",async(req,res)=>{
   let chats=await Chat.find();
   console.log(chats);
   res.render("index.ejs",{chats});

    // .then((result)=>{
    //     res.render("index",{chats:result});
    // })
    // .catch((err)=>{
    //     console.log(err);
    // })
});

            // let chat1=new Chat({
            //     from:"Rajkumar",
            //     to:"Pammi",
            //     message:"hello",
            //     created_at:new Date()
            // })

            // chat1.save()
            // .then((result)=>{
            //     console.log(result);
            // })
            // .catch((err)=>{
            //     console.log(err); 
            // })

app.get("/",(req,res)=>{
    res.send("hello world");
});

app.listen(3000,()=>{
    console.log("server is running on port 3000");
});