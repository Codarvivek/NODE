const http=require('http');
const reqestHandler=require('./user')
const server=http.createServer(reqestHandler);
const PORT=3000;
server.listen(PORT,()=>{
  console.log(`Server Running on address http://localhost:${PORT}`);
});