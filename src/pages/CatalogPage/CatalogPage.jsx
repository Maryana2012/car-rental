import { useState } from "react";
import { useEffect } from "react";

import {axiosAllCars} from "../../axios/axios";
import CarCardList from "components/CarCardList/CarCardList";

const CatalogPage = () => { 
    const [cars, setCars] = useState([]);
    const [page, setPage] = useState(1)
    // const [favorite, setFavorite] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await axiosAllCars(page);
                setCars(data);
                setPage(2);
                } catch (error) {
                console.log(error)
            }
        }
        fetchData();     
    }, [page]);
    
    const handleMakePagination = () => {
        const fetchData = async () => {
            try {
                const data = await axiosAllCars(page);
                setCars((prevCars) => [...prevCars, ...data]);
                setPage((prevPage)=> prevPage +1)
                console.log(cars);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }
      
    return (<>
        <CarCardList cars={cars} />
        <button type="button" onClick={handleMakePagination}>Load More</button>
    </>
        )

}

export default CatalogPage;