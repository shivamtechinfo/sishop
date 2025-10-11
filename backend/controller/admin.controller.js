const adminModel = require('../model/admin.model')
const { noContentResponse, createdResponse, serverErrorResponse, errorResponse, successResponse, deletedResponse, updatedResponse } = require('../utility/response')
var jwt = require('jsonwebtoken');

const admin = {

    async login(req, res) {
        try {
            // console.log(req.body);
            const { email, password } = req.body;
            const admin = await adminModel.findOne({ email: email });
            if (!admin) return errorResponse(res, "Admin not found")
            if (password !== admin.password) return errorResponse(res, "Password not match")

                //add jwt function jo token ko create karega
           const token =  jwt.sign({
                id : admin._id,
                email: admin.email
            }, process.env.TOKEN_SECRET_KEY, { expiresIn: 7 * 24 * 60 * 60 * 1000 });
            return successResponse(res, token,  "Admin login")

        } catch (error) {
            return serverErrorResponse(res, error.message);
        }
    }


}

module.exports = admin
