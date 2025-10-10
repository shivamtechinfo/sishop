const productModel = require('../model/product.model')
const { noContentResponse, createdResponse, serverErrorResponse, errorResponse, successResponse, updatedResponse, deletedResponse } = require('../utility/response')
const { createUniqueName } = require('../utility/helper')
const fs = require('fs')


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
}

module.exports = product





//   const categoryImg = req.files.image

//             const { name, slug } = req.body
//             if (!name || !slug) {
//                 return noContentResponse(res)
//             }

//             const existingItem = await categoryModel.findOne({
//                 name
//             })

//             if (existingItem) {
//                 return serverErrorResponse(res, "Category already created", 409)
//             }

//             const image = createUniqueName(categoryImg.name)

//             const destination = 'public/images/category/' + image

//             categoryImg.mv(
//                 destination,
//                 async (error) => {
//                     if (error) {
//                         return errorResponse(res, "File not found")
//                     } else {
//                         const category = await categoryModel.create({
//                             name,
//                             slug,
//                             image
//                         })

//                         await category.save()
//                         return createdResponse(res, "category created successfully")
//                     }
//                 }
//             )

//             // const category = await categoryModel.create({
//             //     name,
//             //     slug
//             // })

//             // await category.save()
//             // return createdResponse(res, "category created successfully")
