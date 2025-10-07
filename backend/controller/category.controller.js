const categoryModel = require('../model/category.model')
const { noContentResponse, createdResponse, serverErrorResponse, errorResponse, successResponse } = require('../utility/response')

const category = {
    async create(req, res) {
        try {

            if (!req.body.name || !req.body.slug) {
                return noContentResponse(res)
            }

            const exitingItem = await categoryModel.findOne({
                name: req.body.name
            })

            if (exitingItem) {
                return serverErrorResponse(res, "category already created")
            }


            const category = await categoryModel.create({
                name: req.body.name,
                slug: req.body.slug
            })

            await category.save()
            return createdResponse(res, "category create successfully")

        } catch (error) {
            return serverErrorResponse(res)
        }
    },
    async read(req, res) {
        try {
                        
       
            
            const id = req.params.id
            let category = null
            if (id) {
                category = await categoryModel.findById(id)
            } else {
                category = await categoryModel.find()
            }
            if (!category) errorResponse(res, "category not found")
            return successResponse(res, "category found", category)
        } catch (error) {
            return serverErrorResponse(res)
        }
    }
}

module.exports = category