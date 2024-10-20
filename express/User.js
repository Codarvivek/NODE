
const userRequestHandler=(req,res)=>{
  console.log(req.url,req.method);
  
  if(req.url==='/node'){
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>Calculator </title></head>');
    res.write('<body> <h1>Enter Your Name<h1>');
    res.write('<form action="/data" method="POST">');
    res.write('<input type="text" id="name" name="name" placeholder="Enter your name"><br>');
    res.write('<input type="submit" value="Submit">');
    res.write('</form>');
    res.write('</body>');
    res.write('</html>');
    return res.end();
}

else if(req.url.toLocaleLowerCase() ==='/data' && req.method==="POST"){
  const body=[];
  req.on("data",(chunk)=>{
    console.log(chunk);
    body.push(chunk);
  });
  req.on("end",()=>{
    const fullBody=Buffer.concat(body).toString();
    console.log(fullBody);
    const params=new URLSearchParams(fullBody);
    const bodyObject={};
    for(const [key,val] of params.entries()){
      bodyObject[key]=val;
    }
    console.log(bodyObject);
  
  })
  
  res.statusCode=302;
  res.setHeader('Location','/');
 


};
}
module.exports=userRequestHandler;