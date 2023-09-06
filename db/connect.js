const mongoose = require("mongoose");
const { options } = require("../routes/products");

uri =
  "mongodb+srv://mohsinparayoutlook789:FaXbRhHKaooigl7a@cluster0.x8cauie.mongodb.net/?retryWrites=true&w=majority";


  const connectdb = () => {
    console.log("connect db");
  return mongoose.connect(uri, {
    useNewUrlParser:true,
    useUnifiedTopology:true,
  });
};
module.exports = connectdb;