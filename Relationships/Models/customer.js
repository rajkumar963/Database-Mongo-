const mongoose=require("mongoose");
const {Schema}=mongoose;

main().then(()=>console.log("connection successful"))
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/relationshipDemo');
}

const orderSchema=new Schema({
    item:String,
    price:Number,
});

const customerSchema=new Schema({
    name:String,
    orders:[
        {
            type: Schema.Types.ObjectId,
            ref:"Order"
        },
    ]
});

const Order=mongoose.model("Order",orderSchema);
 const Customer=mongoose.model("Customer",customerSchema);

   const findCustomer=async()=>{
//     let cust1=new Customer({
//         name:"Pammi Kumari",
//     });
//     let order1=await Order.findOne({item:"Chips"}); 
//     let order2=await Order.findOne({item:"Cake"});
//     let order3=await Order.findOne({item:"Samosa"});

//     cust1.orders.push(order1);
//     cust1.orders.push(order2);
//     cust1.orders.push(order3);

//     let result=await cust1.save();
//     console.log(result);

 let result=await Customer.find({}).populate("orders");
console.log(result[0]);
}
findCustomer();

// const addOrders=async()=>{
// let res= await order.insertMany([
//        {item:"Samosa",price:10},
//        {item:"Coldrink",price:100},
//        {item:"Chips",price:50},
//        {item:"Cake",price:500},
//    ]);
//     console.log(res);
// }
//addOrders();