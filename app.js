const express = require("express");
const path = require("path")
const app = express();
const port = process.env.PORT || 8040 ;
app.get("/",(req,res) => {
res.sendFile(path.join(__dirname + "/static/index.html"))
})

app.listen(port,()=>{
    console.log("The Application is Running On Port : "+port)
})