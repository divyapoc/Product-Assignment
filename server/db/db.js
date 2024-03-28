const mongoose = require("mongoose")

mongoose.set("strictQuery", false)
const connectDb = async()=>{
    try{
        const connect = await mongoose.connect(process.env.MongoUrl,{
            useNewUrlParser: true,
            useUnifiedTopology:true
        })
        console.log("db connected")
    }catch(error){
        console.log(error.message)
    }
  
}

module.exports = connectDb