const express=require('express');
const app=express();
const port= 5000;

app.get('/',(req,res)=>{
    res.send("Hello from showman")
})
app.get('/data',(req,res)=>{
    res.send("more data from showman")
})

app.listen(port,()=>{
    console.log(`connected to port : ${port}`);
})