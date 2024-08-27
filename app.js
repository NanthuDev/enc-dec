const express = require("express");
const totp = require("./totp");

const app = express();




//app.use('/',(req,res)=>{res.send("Test")})
app.post('/generate',totp.generate)
app.post('/verify',(req,res)=>{res.send("Test")})

app.post('/hotp',(req,res)=>{res.send("Test")})
app.post('/totp',(req,res)=>{res.send("Test")})


app.post('/qrcode',(req,res)=>{res.send("Test")})
app.post('/totp',(req,res)=>{res.send("Test")})


app.listen(3000,()=>{
    console.log("App connected at 3000")
})