const mongoose = require("mongoose")

const productSchema = mongoose.Schema({
    name:{type:String, require: true},
    price:{type: String, require:true},
    category:{type:String, require:true},
    quantity:{type:Number}
},{
    timestamps:true
})

const Product = mongoose.model("product",productSchema )
module.exports = Product