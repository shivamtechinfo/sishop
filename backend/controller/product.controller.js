const productModel = require('../model/product.model')
const { noContentResponse, createdResponse, serverErrorResponse, errorResponse, successResponse, updatedResponse, deletedResponse } = require('../utility/response')
const { createUniqueName } = require('../utility/helper')
const fs = require('fs')
const categoryModel = require('../model/category.model')
const { log } = require('console')


async function saveFile(imageObj) {
    const imageName = createUniqueName(imageObj.name)
    const destination = 'public/images/product/' + imageName
    await imageObj.mv(destination)
    return imageName
}



const product = {
    async create(req, res) {
        try {
            // console.log(req.body);
            // console.log(req.files);
            // Save thumbnail
            const thumbnail = req.files?.thumbnail
                ? await saveFile(req.files.thumbnail)
                : null

            // Save multiple images
            const images = req.files?.images
                ? await Promise.all(
                    (Array.isArray(req.files.images)
                        ? req.files.images
                        : [req.files.images]
                    ).map((img) => saveFile(img))
                )
                : []

            // Create product
            await productModel.create({
                ...req.body,
                colors: req.body.colors ? JSON.parse(req.body.colors) : [],
                thumbnail,
                images
            })

            return res.status(201).json({ success: true, message: "Product created successfully" })
        } catch (error) {
            console.log(error);

            return serverErrorResponse(res)
        }
    },
    async read(req, res) {
        try {
            // console.log(req.query);
            const {categorySlug} = req.query
            const id = req.params.id
            const filterQuery = {}
            if(categorySlug) {
                const category = await categoryModel.findOne({slug : categorySlug})
                if(category) {
                    filterQuery.categoryId = category._id
                }
                // console.log(category);
                
            }
            // console.log(filterQuery);
            
            
            let product = null;
            if (id) {
                product = await productModel.findById(id)
            } else {
                product = await productModel.find(filterQuery)
            }

            if (!product) errorResponse(res, "product not found")
            return successResponse(res, "Product Found", product)
        } catch (error) {
            return serverErrorResponse(res, error.errmsg)
        }
    },
    async status(req, res) {
        try {
            const { flag } = req.body
            const id = req.params.id;
            const product = await productModel.findById(id);
            if (!product) return noContentResponse(res);
            const updateKey = {};
            if (flag == 1) {
                updateKey.status = !product.status
            } else if (flag == 2) {
                updateKey.stock = !product.stock
            } else if (flag == 3) {
                updateKey.topSelling = !product.topSelling
            }


            await productModel.findByIdAndUpdate(
                id,
                {
                    $set: updateKey
                }
            )

            return updatedResponse(res)

        } catch (error) {
            return serverErrorResponse(res, error.errmsg)
        }

    }

}

module.exports = product


