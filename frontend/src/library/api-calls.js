import { axiosInstance } from "./helper"


const getCategories = async () => {
  try {
    const response = await axiosInstance.get("category")
    if (response.data) {
      return response.data.data
    } else {
      return null
    }
  } catch (error) {
    return null
    console.log(error)
  }
}

export { getCategories }