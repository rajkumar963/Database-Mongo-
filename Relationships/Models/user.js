const mongoose=require("mongoose");
const {Schema}=mongoose;

main().then(()=>console.log("connection successful"))
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/relationshipDemo');
}

const userSchema=new Schema({
    username:String,
    addresses:[
    {
        _id:false,
        location:String,
        city:String
    },
],
});

const User=mongoose.model("User",userSchema);

const addUsers=async()=>{
    let user1=new User({
        username:"Rajkumar",
        addresses:[
            {
                location:"22 Beaker Street",
                city:"Hyderabad"
            },
            {
                location:"post office whitefield",
                city:"Banglore"
            }
        ]
    })
    user1.addresses.push({location:"Hitech City",city:"Hyderabad"});
    let result=await user1.save();
    console.log(result);
}

addUsers();