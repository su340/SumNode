const fs = require('fs');
  
//data for pur practise;json turnded to string withJSON parse as servers works with string not json
const index = fs.readFileSync('index.html','utf-8');
const data = JSON.parse(fs.readFileSync('data.json','utf-8')); //we are using utf-8, noe we need to use parse
const products = data.products;

//----need a http module to work to work with (req,res). require it from the default node packages
// const http = require('http'); --not required as exprss will work everything

//-----------Learning API methods
const express = require('express'); //calling server

//--instantaiting new express server
const server = express();
//creating API, End-Point, Routes using DifferentMethods:

  server.get('/',(req,res)=>{
      res.json({type:'GET'})
  });

  server.post('/',(req,res)=>{
    res.json({type:'POST'})
  });

  server.put('/',(req,res)=>{
    res.json({type:'PUT'})
  });

  server.patch('/',(req,res)=>{
    res.json({type:'PATCH'})
});

server.delete('/',(req,res)=>{
  res.json({type:'DELETE'})
});

//-----------------------Express server

//learning to get a response by using .send(), .sendFile, .json
server.get('/demo',(req,res)=>{
//we can send status also using sendStatus
  // res.sendStatus(404); -- we can also attach the status code with the response
  // res.send('hello');
  // res.sendFile('/Users/18474/Desktop/my_server/index.html');  //use '/' slashes
  // res.json(products) //--express amanges the json data , we don't have to convert
  res.status(201).send('<h1>hello</h1>');
});


//starting the server at port no.8080
server.listen(8080,()=>{
  console.log('server started');
});











