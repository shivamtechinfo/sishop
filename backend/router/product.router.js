const productRouter = require('express').Router()
const {create} = require('../controller/product.controller')
const fileupload = require('express-fileupload')

productRouter.post('/create',fileupload({createParentPath: true}), create)


module.exports = productRouter
