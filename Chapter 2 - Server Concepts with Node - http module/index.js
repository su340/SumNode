

//----need a http module to work to work with (req,res). require it from the default node packages

const http = require('http');
const fs = require('fs');
  //creating server with pure node for basic learning without using express,later express will make it easy 

// follow node docs for creating server, etc.

  // --creating a server which is a main object on which our whole
  //application will be running.

  //--trying to send the JSON data into the server
    // const data = {
    //   "age" : 5
    // };

  //--learning to acces HTMl and JSon file

    const index = fs.readFileSync('index.html','utf-8');
    const data = JSON.parse(fs.readFileSync('data.json','utf-8')); //we are using utf-8, noe we need to use parse
    const products = data.products;

  // ---server
  const server = http.createServer((req,res)=>{
    console.log(req.url,req.method);

  if(req.url.startsWith('/product')){
    const id = req.url.split('/')[2]
    const product = products.find(p=>p.id === (+id))  //"+" changes any string into number
    console.log(product);
    res.setHeader('Content-Type','text/html');
      let modifiedIndex = index
      .replace('**title**',product.title)
      .replace('**price**',product.price)
      .replace('**url**',product.thumbnail)
      .replace('**rating**',product.rating)
      res.end(modifiedIndex);
  }

      // switch(req.url){
      //   case '/':
      //     res.setHeader('Content-Type','text/html');
      //     res.end(index);
      //       break;
      //   case '/api':
      //     res.setHeader('Content-Type','application/json');
      //     res.end(JSON.stringify(data));
      //       break;
      //   default:
      //     res.writeHead(404);
      //     res.end();
      // }

    console.log('server started');
    // res.setHeader('Dummy','DummyValue');
    //work of back-end 
    // res.setHeader('Content-Type','text/html');  //eg: of kind of static file (kind of static hosting)
    // res.setHeader('Content-Type','application/json');
    // res.end(index);
  });

  server.listen(8080);

