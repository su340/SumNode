//declaring express in this file also
const express = require('express'); //can be decalred in two files
const productController = require('../controller/product');
const router = express.Router();//declaring once in one file
//const server = express(); ==> server shouldn't be decalred twice. as it will create two servers


//ModelViewCntrolller
router
      .post('/MereAKA',productController.checkAPI)
      .post('/addProducts',productController.addProducts)
      .get('/readProducts',productController.getProduct)
      .get('/readOneProduct/:id',productController.getAllProducts)
      .put('/updatingProduct/:id',productController.updateProduct)
      .patch('/patchingProduct/:id',productController.patchProduct)
      .delete('/deletingProduct/:id',productController.deleteProduct);

exports.routes = router;