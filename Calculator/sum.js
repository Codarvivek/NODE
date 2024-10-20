const sumRequesthandler=(req,res)=>{
  const body=[];
  req.on("data",(chunk)=>{
    console.log(chunk);
    body.push(chunk);
  });
  req.on("end",()=>{
    const fullBody=Buffer.concat(body).toString();
    console.log(fullBody);
    const params=new URLSearchParams(fullBody);//decode the data
    const bodyObject=Object.fromEntries(params);//json formet
    console.log(bodyObject);
    const sum=Number(bodyObject.FirstNumber)+Number(bodyObject.SecondNumber);
    console.log(sum);
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>Error</title></head>');
    res.write(`<body> <h1>Sum of Number ${sum}<h1>`);
    res.write('<h2><a href="/">Go to homepage</a></h2>')
    res.write('</body>');
    res.write('</html>');
    return res.end();
  });
}

exports.sumRequesthandler=sumRequesthandler;