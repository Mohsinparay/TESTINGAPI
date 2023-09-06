require('dotenv');
const connectDB = require("./db/connect");
const Product = require('./models/product');
const productjson = require("./products.json");
const start = async()=>{
    try {
        await connectDB(process.env.MONDODB_URL);
        // to delete previous data 
        await Product.deleteMany();
        await Product.create(productjson);
        console.log("success");
    } catch (error) {
        console.log(error);
    }
}
start();
