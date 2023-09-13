import axios from 'axios'

const BASE_URL = "https://648ce1bb8620b8bae7ed79fb.mockapi.io/cars"
const axiosAllCars = async () => {
    try {
        const response = await axios.get(BASE_URL);
        console.log(response);
        return response.data;
        
    } catch (error) {
        console.log(error);
    }
}

export default axiosAllCars;