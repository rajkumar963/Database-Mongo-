const mongoose=require("mongoose");
const {Schema}=mongoose;

main().then(()=>console.log("connection successful"))
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/relationshipDemo');
}

const userSchema=new Schema({
    username:String,
    //email:string,
    address:String,
});

const postSchema=new Schema({
      
    // content:string,
    likes:Number,
    user:{
        type:Schema.Types.ObjectId,
        ref:"User"
    }
})

const User=mongoose.model("User",userSchema);
const Post=mongoose.model("Post",postSchema);

// const addData=async()=>{
//     let user=await User.findOne({username:"Rajnikumari"});

//     let post2=new Post({
//        // content:"This is my first post",
//         likes:100,
       
//     });
//     post2.user=user;
//    await post2.save();
// };

const getData=async()=>{
  let result= await Post.findOne({}).populate("user","username ");
  console.log(result);
}
getData();
