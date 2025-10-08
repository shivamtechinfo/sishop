const colorRouter = require('express').Router();
const { create, read, deleteById, status } = require('../controller/color.controller');

colorRouter.post('/create', create)
colorRouter.get('/:id?', read);
colorRouter.delete('/delete/:id?', deleteById);
colorRouter.patch('/status/:id?', status);
module.exports = colorRouter;
