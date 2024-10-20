
const {sumRequesthandler}=require('./sum');


const userRequestHandler=(req,res)=>{
  console.log(req.url,req.method);
  if(req.url=='/'){
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>HomePage</title></head>');
    res.write('<body> <h1>Welcome to Home Page<h1>');
    res.write('<h2><a href="/calculator">Go to calculator</a></h2>')
    res.write('</body>');
    res.write('</html>');
    return res.end();
  }
  else if(req.url==='/calculator'){
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>Calculator </title></head>');
    res.write('<body> <h1>Welcome To Calculator<h1>');
    res.write('<form action="/calculator-result" method="POST">');
    res.write('<input type="text" id="name" name="FirstNumber" placeholder="FirstNumber"><br>');
    res.write('<br><input type="text" id="name" name="SecondNumber" placeholder="SecondNumber"><br>');
    res.write('<input type="submit" value="Submit">');
    res.write('</form>');
    res.write('</body>');
    res.write('</html>');
    return res.end();
}

else if(req.url.toLocaleLowerCase() ==='/calculator-result' && req.method==="POST"){
return sumRequesthandler(req,res);
 
}
res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>Error</title></head>');
    res.write('<body> <h1>404 page Does not exit<h1>');
    res.write('<h2><a href="/">Go to homepage</a></h2>')
    res.write('</body>');
    res.write('</html>');
    return res.end();

};
module.exports=userRequestHandler;