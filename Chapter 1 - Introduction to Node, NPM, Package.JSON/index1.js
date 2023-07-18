
//fetching the express framework to build complex projects.

const express = require('express');

console.log('hello'); //node runs normally on JS and stops
                      //automatically

//running express
//the Express application, which can be used to define routes,
//middleware, and handle HTTP requests.

const server = express(); //creates an express server
server.listen(8080);  //once the server is started,it will not stop 
                      //automatically.

//starting the server at port 8080
//the port number on which the server will listen for incoming requests.

// ----------------

//to stop the problem of server running,
//we are keeping dev dependencies, which will helps us stopping the server
//only in the development phase, it is not global or effects the application.


