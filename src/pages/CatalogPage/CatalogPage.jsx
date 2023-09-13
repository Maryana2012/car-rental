import { useState } from "react";
import { useEffect } from "react";
import axios from 'axios'

import axiosAllCars from "../../axios/axios";
import CarCardList from "components/CarCardList/CarCardList";

const CatalogPage = () => { 

    const [cars, setCars] = useState(null);
const BASE_URL = "https://648ce1bb8620b8bae7ed79fb.mockapi.io/cars"
    useEffect(() => {
        const fetchData = async () => {
            try {
                // const data = await axiosAllCars();
                const data = await axios.get(BASE_URL)
                setCars(data)
                console.log(data);
            } catch (error) {
                console.log(error)
            }
        }
        fetchData();     
});
    console.log(cars)
    
    return(<CarCardList cars={cars} />
        )

}

export default CatalogPage;