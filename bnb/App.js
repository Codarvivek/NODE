const express=require('express');
const fs=require('fs');
const userRouter=require('./routes/userRouter');
const hostRouter = require('./routes/hostRouter');
const path=require('path');
const rootDir=require('./utils/pathutils')
const app=express();
const PORT=3000;
const index=fs.readFileSync('demo.json','utf-8');
const data=JSON.parse(index);
const products=data.product;

app.use(express.urlencoded());
// app.use('/json',(req,res,next)=>{
//   res.setHeader('Content-Type','application/json')
//   res.send(data);
// })
app.use('/json/:id',(req,res,next)=>{
  const id=+req.params.id;
  const product=products.find(p=>p.id===id);
  res.setHeader('Content-Type','application/json')
  res.json(product);
})
app.use(userRouter);
app.use(hostRouter);
app.use((req,res,next)=>{
  res.status(404).sendFile(path.join(rootDir,'/view','404.html'));
})


app.listen(PORT,()=>{
  console.log(`Server running on address http://localhost:${PORT}`);
});
