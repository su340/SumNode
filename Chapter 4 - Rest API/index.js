
const express = require('express');
const server = express();
// const productRouter = express.Router();
const productRouter = require('./routes/product');
const userRouter = require('./routes/user')


//bodyParser(MiddleWare)
server.use(express.json());
//to access the path we have to have this middleware router in our custom path
server.use('/products',productRouter.routes); //routes(declared variable in the product.js)
server.use('/users',userRouter.routes);

// ---Adding the port number for the application:
server.listen(8082,()=>{
 console.log("server Started");
});


