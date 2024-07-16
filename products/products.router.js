const express = require('express')
const { postProductController, getProductByIdController, deleteProductByIdController, getAllProducts, updateProductController } = require('./products.controller')

const productRouter = express.Router()





productRouter.get('/', getAllProducts)
productRouter.post('/' , postProductController)
productRouter.put('/:pid', updateProductController)
productRouter.delete('/:pid', deleteProductByIdController)
productRouter.get('/:pid', getProductByIdController)


module.exports = {productRouter} 