import axios from 'axios'

const BASE_URL = "https://648ce1bb8620b8bae7ed79fb.mockapi.io/cars"
const limit = 8;
export const axiosAllCars = async (page) => {
    try {
        const response = await axios.get(`${BASE_URL}?page=${page}&limit=${limit}`);
        return response.data;
        
    } catch (error) {
        console.log(error);
    }
}

// export const axiosPagination = async(page) => {
//     try {
//           const response = await axios.get(`${BASE_URL}?page=${page}&limit=${limit}`);
//           return response.data
//     } catch (error) {
//         console.log(error);
//     }

// }

// export default axiosAllCars;
// export default axiosPagination;