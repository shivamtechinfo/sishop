const categoryRouter = require('express').Router()
const {create, read} = require('../controller/category.controller')
const fileupload = require('express-fileupload')

categoryRouter.post('/create',fileupload({createParentPath: true}), create)
categoryRouter.get('/:id?', read)

module.exports = categoryRouter
