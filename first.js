console.log("Welcome to first Node Js File");
const fs=require('fs');
fs.writeFile("output.txt","Hello World!",(err)=>{
  if(err){
    console.log('Error Occurred')
  }
  else{
    console.log('File Write successfully')
  }
})