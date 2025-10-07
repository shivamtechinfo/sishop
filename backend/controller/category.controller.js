const categoryModel = require('../model/category.model')
const { noContentResponse, createdResponse, serverErrorResponse, errorResponse, successResponse  } = require('../utility/response')

const category = {
    async create(req, res) {
        try {
            console.log(req.body);
            console.log(req.files);
            
            
            const {name, slug } = req.body
            if (!name || !slug) {
                return noContentResponse(res)
            }

            const existingItem = await categoryModel.findOne({
                name
            })

            if(existingItem) {
                return serverErrorResponse(res, "Category already created", 409)
            }
 
            const category = await categoryModel.create({
                name,
                slug
            })


            await category.save()
            return createdResponse(res, "category created successfully")

        } catch (error) {
            console.log(error);
            
            return serverErrorResponse(res)
        }
    },
    async read(req, res) {
        try {
            const id = req.params.id

            let category = null 
            if(id) {
                category = await categoryModel.findById(id)
            } else {
                category = await categoryModel.find()
            }
            
            if(!category) errorResponse(res, "Category not found")
                return successResponse(res, "Category Found", category)
            
        } catch (error) {
            return serverErrorResponse(res,  error.msg)
        }
    }
}

module.exports = category
