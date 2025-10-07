const categoryRouter = require('express').Router()
const {create, read, deleteById, status} = require('../controller/category.controller')
const fileupload = require('express-fileupload')

categoryRouter.post('/create',fileupload({createParentPath: true}), create)
categoryRouter.get('/:id?', read)
categoryRouter.delete('/delete/:id', deleteById)
categoryRouter.patch('/status/:id', status)

module.exports = categoryRouter
