const adminModel = require('../model/admin.model')
const { noContentResponse, createdResponse, serverErrorResponse, errorResponse, successResponse, deletedResponse, updatedResponse } = require('../utility/response')

const admin = {

    async login(req, res) {
        try {
            console.log("Received:", req.body);

            const { email } = req.body;

            if (!email) {
                return errorResponse(res, "Email is required");
            }

        } catch (error) {
            return serverErrorResponse(res, error.message);
        }
    }


}

module.exports = admin
