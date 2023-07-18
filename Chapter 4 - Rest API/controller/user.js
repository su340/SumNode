
const fs = require('fs');
const data = JSON.parse(fs.readFileSync('data.json','utf-8'));
const users = data.users;

exports.checkAPI = (req,res)=>{
  res.json(`I love you mere Aka 'SAllal lahu alaihi wasalam'`)
};

exports.add = (req,res)=>{
  users.push(req.body);
  res.json({type:'POST'});
  console.log('product added');
};

exports.get = (req,res,next)=>{
  res.json(users);
};

exports.getAll = (req,res)=>{
  const id = +req.params.id;  
  const dekho =users.find(p => p.id === id)
  res.json(dekho);
};

exports.update = (req,res)=>{
  const id = +req.params.id;
  const productIndex = users.findIndex(p => p.id === id);
  users.splice(productIndex,1,{...req.body, id:id})
  res.status(201).json({type:'put'});
};

exports.patch = (req,res)=>{
  const id = +req.params.id;
  const productIndex = users.findIndex(p => p.id === id);
  const product = users[productIndex];
  users.splice(productIndex,1,{...product,...req.body})
  res.status(201).json({type:'patch'});
};

exports.delete = (req,res)=>{
  const id = +req.params.id;
  const productIndex = users.findIndex(p => p.id === id);
  const product = users[productIndex];
  users.splice(productIndex,1)
  res.status(201).json({type:'deleted'});
};
