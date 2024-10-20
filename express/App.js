//core module
const http=require('http');
//local module
const reqestHandler=require('./User');
//extarnal modue
const express=require('express');
const app=express();
const server=http.createServer(app);
const PORT=3000;
server.listen(PORT,()=>{
  console.log(`Server Running on address http://localhost:${PORT}`);
});