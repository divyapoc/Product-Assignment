const express = require("express")
const cors = require("cors")
const connectDb = require("./db/db")
const dotenv = require("dotenv")
const app = express()
const ProductRoute = require("./routes/productRoutes")
//WxOlhBSSBFbRFVPO - atlas db passcode 
// username = divyalk23
app.use(express.json())
dotenv.config()
app.use(cors())
connectDb()
app.use("/api/product",ProductRoute)
const port = process.env.PORT || 8000
app.listen(port,()=>{
    console.log(`app listening at ${port}`)
})
