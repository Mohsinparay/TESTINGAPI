require("dotenv").config();
const express = require("express");
const connectdb = require('./db/connect') 
const app = express();
const PORT = process.env.PORT || 3000;
const products_routes = require('./routes/products')
app.get("/",(req, res)=>{
  res.send("I am running");
});

app.use("/api/products",products_routes);

const start = async()=>{
  try {
    await connectdb(process.env.MONDODB_URL);
    app.listen(PORT,()=>{
      console.log(`i am running on port ${PORT}`)
    });
  } catch (error) {
    console.log(error);
  }
};
start();

