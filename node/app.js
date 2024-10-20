const http=require('http');

const server=http.createServer((req,res)=>{
  
  if(req.url==="/home"){
    res.setHeader('Content-Type','text/html');
  res.write(`<html>
<head>
  <title>Document</title>
</head>
<body>
  <h1>hello</h1>
</body>
</html>`);
return res.end();
  }
})
const PORT=3000;
server.listen(PORT,()=>{
  console.log(`Server Running on address http://localhost:${PORT}`);
});