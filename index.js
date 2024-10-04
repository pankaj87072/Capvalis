const express=require('express');
const app=express();
const path=require('path');
const cors = require('cors');
const dotenv=require('dotenv');
dotenv.config();
app.use(cors());
const PORT=process.env.PORT||8080;
app.use(express.static(path.join(__dirname,'./frontend/build')));
app.get('*',(req,resp)=>{
    console.log("wokring");
    resp.sendFile(
        path.join(__dirname,'./frontend/build/index.html'),
        function (err){
            resp.status(500).send(err)
        }    
    )
});
app.listen(PORT,()=>{
    console.log("WORKING ON PORT:"+PORT);
})