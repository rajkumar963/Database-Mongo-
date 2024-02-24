const mongoose = require('mongoose');

//mongoose.connect('mongodb://127.0.0.1:27017/test');

main()
.then(()=>{
    console.log("connection successful")
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test'); // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const userSchema=new mongoose.Schema({
    name:String,
    email:String,
    age:Number,
    city:String,
});

const User=mongoose.model("User",userSchema);

//Update Method

// User.updateOne({name:"Rajkumar"},{city:"Banglore"})
// .then((result)=>{
//     console.log(result);
// })
// .catch((err)=>{
//     console.log(err);
// })

// User.updateMany({age:{$gt:23}},{age:30})
// .then((result)=>{
//     console.log(result);
// })
// .catch((err)=>{
//     console.log(err);
// })

// User.findOneAndUpdate({name:"Rajkumar"},{age:30},{new:true})
// .then((result)=>{
//     console.log(result);
// })
// .catch((err)=>{
//     console.log(err);
// })

// User.findByIdAndUpdate('65d9713fdea8eca84696f2c9',{age:50},{new:true})
// .then((result)=>{
//     console.log(result);
// })
// .catch((err)=>{
//     console.log(err);
// })

// Delete Method

// User.deleteOne({name:"Rajni Kumari"})
// .then((result)=>{
//     console.log(result);
// })
// .catch((err)=>{
//     console.log(err);
// })


// User.deleteMany({age:30})
// .then((result)=>{
//     console.log(result);
// })
// .catch((err)=>{
//     console.log(err);
// })

User.findByIdAndDelete('65d9713fdea8eca84696f2c9',{age:50},{new:true})
.then((result)=>{
    console.log(result);
})
.catch((err)=>{
    console.log(err);
})


// Find Method

// User.findById('65d9713fdea8eca84696f2c9').then((result)=>{
//     console.log(result);
// })
// .catch((err)=>{
//     console.log(err);
// })


//Multiple data insertion

// User.insertMany([
//     {name:"Raju",email:"raju@example.com",age:22,city:"Ranchi"},
//     {name:"Apsanoori",email:"apsan@example.com",age:23,city:"Mumbai"},
//     {name:"Ram",email:"ram@example.com",age:24,city:"Delhi"},
//     {name:"Shyam",email:"shyam@example.com",age:25,city:"Kolkata"},
// ])
// .then((result)=>{
// console.log(result);
// });


// single data insertion

// const user1=new User({
//     name:"Rajkumar",
//     email:"XHn9t@example.com",
//     age:20,
//     city:"Ranchi"
// })
// const user3=new User({
//     name:"Rajni Kumari",
//     email:"rajni@yahoo.com",
//     age:28,
//     city:"Mumbai"
// })
// user3
// .save()
// .then(()=>{
//     console.log("data inserted")
// })
// .catch((err)=>{
//     console.log(err)
// })
