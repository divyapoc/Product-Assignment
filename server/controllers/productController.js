const Product = require("../model/productModel")

const CreateProduct = async(req,res)=>{
    const {name , price,category , quantity} = req.body
    if(!name || !price || !category){
        return res.status(400).json({
            status: "fail",
            message:"fill required fields"
        })
    }
    try {
        const data = req.body
       const product = await Product.create({
        name , price,category , quantity
       }) 
       return res.status(200).json({
        status:"success",
        message:"Product created successfully",
        result:data
       })
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

const getAllProduct = async(req,res)=>{

    try {
       const products = await Product.find()
       return res.status(200).json({status: "success", message:"data  fetched", result:products})
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

module.exports = {
    getAllProduct ,
    CreateProduct  
}