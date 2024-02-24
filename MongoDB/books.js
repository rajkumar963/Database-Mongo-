const mongoose = require('mongoose');

main()
.then(()=>{
    console.log("connection successful")
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/amazon'); // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const bookSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
        maxlength:30,
          },
    author:{
        type:String,
           },
    price: {
        type:Number,
        min:[1,"price should be greater than 1"],
    },
    discount:{
        type:Number,
        default:0
    },
    category:{
        type:String,
        enum:["education","entertainment","comics"]
    },
    date:{
        type:Date,
    },
    genre: [String],
    
});

const Book=mongoose.model("Book",bookSchema);
// let book1=new Book({
//     title:"Mathematics",
//     author:"RD Sharma",
//     price: 1000
// })
// book1.save().then((result)=>{
//     console.log(result);
// })
// .catch((err)=>{
//     console.log(err);
// })


// let book2=new Book({
//     title:"Chemistry",
//     author:"Cengaze",
//     price: "1500"
// })
// book2.save().then((result)=>{
//     console.log(result);
// })
// .catch((err)=>{
//     console.log(err);
// })

// let book3=new Book({
//     title:"The Alchemist",
//     author:"Paulo Clear",
//     price: 590,
//     genre:["fiction","adventure","children","romance"]
// })
// book3.save().then((result)=>{
//     console.log(result);
// })
// .catch((err)=>{
//     console.log(err);
// })

// Update Method

Book.findByIdAndUpdate('65da61b58c828a2187d504dc',{price:-500},{runValidators:true})
.then((result)=>{
    console.log(result);
})
.catch((err)=>{
    console.log(err.errors.price.properties.message);
})