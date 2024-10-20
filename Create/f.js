const http=require('http');
const fs=require('fs');
const server=http.createServer((req,res)=>{
  console.log(req.url,req.method,req.headers);
  if(req.url==='/homepage'){
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>Home Page </title></head>');
    res.write('<body><h1>Welcome to Home Page...<h1></body>');
    res.write('</html>');
    res.end();
  }
  else if(req.url==='/'){
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>Details </title></head>');
    res.write('<body> <h1>Enetr your Details<h1>');
    res.write('<form action="/submit-details" method="POST">');
    res.write('<input type="text" id="name" name="username" placeholder="Enter your name"><br>');
    res.write('<br><lable for="male" >Male</lable>');
    res.write('<input type="radio" id="male" name="gender" value="male">');
    res.write('<br><lable for="female" >Female</lable>');
    res.write('<input type="radio" id="female" name="gender" value="female">');
    res.write('<input type="submit" value="Submit">');
    res.write('</form>');
    res.write('</body>');
    res.write('</html>');
    return res.end();
}
else if(req.url.toLocaleLowerCase() ==='/submit-details' && req.method==="POST"){
  fs.writeFileSync('demo.txt','vivek Pratap');
  res.statusCode=302;
  res.setHeader('Location','/');
 
}



});
const PORT=3000;
server.listen(PORT,()=>{
  console.log(`Server Running on address http://localhost:${PORT}`)
});

