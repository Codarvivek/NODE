const fs=require('fs');
const userRequestHandler=(req,res)=>{
  console.log(req.url,req.method);
  if(req.url==='/'){
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
    fs.writeFileSync('demo.txt',JSON.stringify(bodyObject));
    console.log(bodyObject);

  })
  
  res.statusCode=302;
  res.setHeader('Location','/');
 
}

};
module.exports=userRequestHandler;