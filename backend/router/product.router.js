const productRouter = require('express').Router()
const {create, read} = require('../controller/product.controller')
const fileupload = require('express-fileupload')

productRouter.post('/create',fileupload({createParentPath: true}), create)
productRouter.get('/:id?', read)


module.exports = productRouter
