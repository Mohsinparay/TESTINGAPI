require("dotenv").config();
const express = require("express");
const connectdb = require('./db/connect') 
const app = express();
const PORT = process.env.PORT || 5000;
const products_routes = require('./routes/products')
app.get("/",(req, res)=>{
  res.send("App is running");
});

app.use("/api/products",products_routes);

const start = async()=>{
  try {
    await connectdb(process.env.MONDODB_URL);
    app.listen(PORT,()=>{
      console.log(`I am running on port ${PORT}`)
    });
  } catch (error) {
    console.log(error);
  }
};
start();

