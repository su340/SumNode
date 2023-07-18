
// ----MVC(Model View Controller):

//---Learning Controller

//Files
const fs = require('fs');
const index = fs.readFileSync('index.html','utf-8');
const data = JSON.parse(fs.readFileSync('data.json','utf-8'));
const products = data.products;


const express = require('express');
const server = express();

//bodyParser
server.use(express.json());

//fucntions
const checkAPI = (req,res)=>{
  res.json(`I love you mere Aka 'SAllal lahu alaihi wasalam'`)
};

const addProducts = (req,res)=>{
  products.push(req.body);
  res.json({type:'POST'});
  console.log('product added');
};

const getProduct = (req,res,next)=>{
  res.json(products);
};

const getAllProducts = (req,res)=>{
  const id = +req.params.id;  
  const dekho =products.find(p => p.id === id)
  res.json(dekho);
};

const updateProduct = (req,res)=>{
  const id = +req.params.id;
  const productIndex = products.findIndex(p => p.id === id);
  products.splice(productIndex,1,{...req.body, id:id})
  res.status(201).json({type:'put'});
};

const patchProduct = (req,res)=>{
  const id = +req.params.id;
  const productIndex = products.findIndex(p => p.id === id);
  const product = products[productIndex];
  products.splice(productIndex,1,{...product,...req.body})
  res.status(201).json({type:'patch'});
};

const deleteProduct = (req,res)=>{
  const id = +req.params.id;
  const productIndex = products.findIndex(p => p.id === id);
  const product = products[productIndex];
  products.splice(productIndex,1)
  res.status(201).json({type:'deleted'});
};

server.post('/MereAKA',checkAPI);
server.post('/addProducts',addProducts);
server.get('/readProducts',getProduct);
server.get('/readOneProduct/:id',getAllProducts);
server.put('/updatingProduct/:id',updateProduct);
server.patch('/patchingProduct/:id',patchProduct);
server.delete('/deletingProduct/:id',deleteProduct);

// ---Adding the port number for the application:
  server.listen(8082,()=>{
    console.log("server Started");
  });