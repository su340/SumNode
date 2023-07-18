
const express = require('express'); //can be decalred in two files
const userController = require('../controller/user');
const router = express.Router();//declaring once in one file



router
      .post('/',userController.checkAPI)
      .post('/add',userController.add)
      .get('/',userController.get)
      .get('/:id',userController.getAll)
      .put('/:id',userController.update)
      .patch('/:id',userController.patch)
      .delete('/:id',userController.delete);

exports.routes = router;