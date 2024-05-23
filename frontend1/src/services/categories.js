import axiosInstance from "./axiosinstance"


export const getAllCategories = () => {
    return axiosInstance.get("/category/all");
};




// Replace 'your_api_url' with the actual API endpoint
// const API_URL = 'mongodb+srv://anjalichandwani04:chandwani12@cluster0.y8islsn.mongodb.net/api/categories';

// export const fetchCategories = async () => {
//   try {
//     const response = await axios.get(API_URL);
//     return response.data;
//   } catch (error) {
//     console.error('AxiosError:', error);
//     throw error; // Re-throw the error after logging it
//   }
// };
