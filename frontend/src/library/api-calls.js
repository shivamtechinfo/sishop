import axios from "axios"


const getCategories = async () => {
  try {
    const response = await axios.get("http://localhost:5000/category")
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