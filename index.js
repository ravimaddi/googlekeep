const express =require('express')
const connectDb=require('./config/database')
const router =require('./config/routes')
const cors = require('cors')
const path = require('path')
const port = process.env.PORT || 3015;
const app=express()
connectDb()
app.use(cors())
app.use(express.json())
app.use(express.static(path.join(__dirname,"client/build"))) 
app.get("*",(req,res) => { 
    res.sendFile(path.join(__dirname + "/client/build/index.html")) 
}) 

app.use('/api',router)
app.listen(port,function(){
    console.log('listening on the port',port)
})