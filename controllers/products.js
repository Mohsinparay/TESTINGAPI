const Product = require("../models/product");

const getallproducts = async(req,res)=>{
const {company,name,featured,sort,select} = req.query;
const queryObject = {};
if (company){
    queryObject.company = company;
    console.log(queryObject)
if (featured) {
    queryObject.featured = featured;
    // console.log(queryObject) 
}}

if (name){
    queryObject.name = {$regex:name,$options:"i"};
}
let apiData = Product.find(queryObject);
if (sort) {
    let sortfix = sort.replace(",", " ");
    apiData = apiData.sort(sortfix);
}
if (select) {
    // let selectfix = select.replace(",", " ");
    let selectfix = select.split(",").join(" ");

    apiData = apiData.select(selectfix);
   
}

let page=Number(req.query.page) || 1;
let limit = Number(req.query.limit) || 3;
let skip = (page-1)*limit;

apiData = apiData.skip(skip).limit(limit);





console.log(queryObject)



    const mydata = await apiData;
res.status(200).json({mydata,nbHits: mydata.length})
}

const getallproductstesting = async(req,res)=>{
    const mydata = await Product.find(req.query).skip(3);
    // console.log(req.query);
    res.status(200).json({mydata})
    };

module.exports = {getallproducts,getallproductstesting};

//we use req.query for filtering the items company=apple&name=iwatch