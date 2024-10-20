const express=require('express');
const path=require('path');
const hostRouter=express.Router();
hostRouter.get('/add-home',(req,res,next)=>{
  res.sendFile(path.join(__dirname,'../','view','addhome.html'))
});

hostRouter.post('/add-home',(req,res,next)=>{
  console.log(req.body);
  res.sendFile(path.join(__dirname,'../','view','homeadded.html'))
});

module.exports=hostRouter;