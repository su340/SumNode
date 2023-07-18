//declaring express in this file also
const express = require('express'); //can be decalred in two files
const productController = require('../controller/product');
const router = express.Router();//declaring once in one file
//const server = express(); ==> server shouldn't be decalred twice. as it will create two servers


//ModelViewCntrolller
router
      .post('/',productController.checkAPI)
      .post('/add',productController.addProducts)
      .get('/',productController.getProduct)
      .get('/:id',productController.getAllProducts)
      .put('/:id',productController.updateProduct)
      .patch('/:id',productController.patchProduct)
      .delete('/:id',productController.deleteProduct);

exports.routes = router;