const express = require("express")
const app = express()

app.use(express.json())

app.get('/', ((req, res) =>{
    res.send("Hello World")
}))

app.listen(5050, ()=>{
    console.log("server is running")
})
