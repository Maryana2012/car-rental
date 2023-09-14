import { useState } from "react";
import { useEffect } from "react";

import {axiosAllCars,axiosPagination} from "../../axios/axios";
import CarCardList from "components/CarCardList/CarCardList";

const CatalogPage = () => { 
    const [cars, setCars] = useState([]);
    const [page, setPage] = useState(1)
    const [favorite, setFavorite] = useState(JSON.parse(window.localStorage.getItem('favorite')) ?? []);
  

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await axiosAllCars();
                setCars(data);
                setPage(2);
                } catch (error) {
                console.log(error)
            }
        }
        fetchData();     
    }, []);
    
       
    useEffect(() => {
    const favoriteStringify = JSON.stringify(favorite)
        localStorage.setItem("favorite", favoriteStringify)
    }, [favorite])

    const handleFavoriteCar = (carId) => {
    
     const favoriteCar = cars.find(car =>  car.id === carId );
        setFavorite((prevFavorite) => [...prevFavorite, favoriteCar]);
  };
    
    const handleMakePagination = () => {
        const fetchData = async () => {
            try {
                const data = await axiosPagination(page);
                setCars((prevCars) => [...prevCars, ...data]);
                setPage((prevPage) => prevPage + 1);
                console.log(cars);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }
      
    return (<>
        <CarCardList cars={cars} onHandleFavoriteCar={ handleFavoriteCar} />
        <button type="button" onClick={handleMakePagination}>Load More</button>
    </>
        )

}

export default CatalogPage;