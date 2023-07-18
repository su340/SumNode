//router
//Check express docs for router
//helps if need changes/updates in path/routes

//Files for the app
const fs = require('fs');
// const index = fs.readFileSync('index.html','utf-8'); not required for now
const data = JSON.parse(fs.readFileSync('data.json','utf-8'));
const products = data.products;

//exporting the fucntions
exports.checkAPI = (req,res)=>{
  res.json(`I love you mere Aka 'SAllal lahu alaihi wasalam'`)
};

exports.addProducts = (req,res)=>{
  products.push(req.body);
  res.json({type:'POST'});
  console.log('product added');
};

exports.getProduct = (req,res,next)=>{
  res.json(products);
};

exports.getAllProducts = (req,res)=>{
  const id = +req.params.id;  
  const dekho =products.find(p => p.id === id)
  res.json(dekho);
};

exports.updateProduct = (req,res)=>{
  const id = +req.params.id;
  const productIndex = products.findIndex(p => p.id === id);
  products.splice(productIndex,1,{...req.body, id:id})
  res.status(201).json({type:'put'});
};

exports.patchProduct = (req,res)=>{
  const id = +req.params.id;
  const productIndex = products.findIndex(p => p.id === id);
  const product = products[productIndex];
  products.splice(productIndex,1,{...product,...req.body})
  res.status(201).json({type:'patch'});
};

exports.deleteProduct = (req,res)=>{
  const id = +req.params.id;
  const productIndex = products.findIndex(p => p.id === id);
  const product = products[productIndex];
  products.splice(productIndex,1)
  res.status(201).json({type:'deleted'});
};
