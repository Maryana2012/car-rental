import { useState } from "react";
import { useEffect } from "react";

import axiosAllCars from "../../axios/axios";

const CatalogPage = () => { 

    const [cars, setCars] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await axiosAllCars();
                setCars(data)
                console.log(data);
            } catch (error) {
                console.log(error)
            }
        }
        fetchData();     
},[])

}

export default CatalogPage;