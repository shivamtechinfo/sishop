const productModel = require('../model/product.model')
const { noContentResponse, createdResponse, serverErrorResponse, errorResponse, successResponse, updatedResponse, deletedResponse } = require('../utility/response')
const { createUniqueName } = require('../utility/helper')
const fs = require('fs')

const product = {
    async create(req, res) {
        try {
            // console.log(req.body);
            // console.log(req.files);
            const categoryImg = req.files.image

            const { name, slug } = req.body
            if (!name || !slug) {
                return noContentResponse(res)
            }

            const existingItem = await categoryModel.findOne({
                name
            })

            if (existingItem) {
                return serverErrorResponse(res, "Category already created", 409)
            }

            const image = createUniqueName(categoryImg.name)

            const destination = 'public/images/category/' + image

            categoryImg.mv(
                destination,
                async (error) => {
                    if (error) {
                        return errorResponse(res, "File not found")
                    } else {
                        const category = await categoryModel.create({
                            name,
                            slug,
                            image
                        })

                        await category.save()
                        return createdResponse(res, "category created successfully")
                    }
                }
            )

            // const category = await categoryModel.create({
            //     name,
            //     slug
            // })

            // await category.save()
            // return createdResponse(res, "category created successfully")

        } catch (error) {
            console.log(error);

            return serverErrorResponse(res)
        }
    },



}

module.exports = product
