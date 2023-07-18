//----Middleware
const fs = require('fs');

const index = fs.readFileSync('index.html','utf-8');
const data = JSON.parse(fs.readFileSync('data.json','utf-8')); //we are using utf-8, noe we need to use parse
const products = data.products;

const express = require('express'); //calling server
const server = express();

//---logger Middlware(creating the information about the usage of the server)

// ---Application MiddleWare
server.use((req,res,next)=>{
  console.log(req.method,req.ip,req.hostname,new Date(),req.get('User-Agent')) //checking the server/system info
  // console.log(req.method,req.ip,req.hostname);
  next();
});

// -----authentication Middleware

//----(BODY-PARSER)using Bilt-in-middleware to read the json body
server.use(express.json());

//----(URL-PARESER)using when we deal with forms,as the forms are send using URL)
// server.use(express.urlencoded());

//----(static)--mo server interference.serves assests such as HTML,images. follow notes
server.use(express.static('public')); //give a folder which u want to send statically. make public folder and see how data is send

const auth = (req,res,next)=>{
  // console.log(req.query.password);
  if(req.body.password=='564'){
    next();
  }else{
    res.sendStatus(401);
  }
}



//--trying MiddleWare with authentication

// -------Routes MiddleWare
server.get('/',auth,(req,res)=>{
  res.json({type:'GET'})
});

server.post('/',auth,(req,res)=>{
  res.json({type:'POST'})
});

server.put('/',auth,(req,res)=>{
  res.json({type:'PUT'})
});

server.patch('/',auth,(req,res)=>{
  res.json({type:'PATCH'})
});

server.delete('/',auth,(req,res)=>{
 res.json({type:'DELETE'})
});

server.get('/demo',auth,(req,res)=>{
  res.status(201).send('<h1>hello</h1>');
});



// // -------Routes MiddleWare
//   server.get('/',(req,res)=>{
//     res.json({type:'GET'})
//   });

//   server.post('/',(req,res)=>{
//     res.json({type:'POST'})
//   });

//   server.put('/',(req,res)=>{
//     res.json({type:'PUT'})
//   });

//   server.patch('/',(req,res)=>{
//     res.json({type:'PATCH'})
// });

//   server.delete('/',(req,res)=>{
//    res.json({type:'DELETE'})
//   });

//   server.get('/demo',(req,res)=>{
//     res.status(201).send('<h1>hello</h1>');
//   });

  server.listen(8080,()=>{
    console.log('server started');
  });











