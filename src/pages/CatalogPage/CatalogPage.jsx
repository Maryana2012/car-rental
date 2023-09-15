import { useState, useEffect } from "react";
import Select from 'react-select';

import { axiosAllCars, axiosPagination } from "../../axios/axios";
import CarCardList from "components/CarCardList/CarCardList";
import { optionsMark,optionsPrice } from "../../data";

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
        if (favorite.length === 0) {
           const favoriteCar = cars.find(car =>  car.id === carId );
            setFavorite((prevFavorite) => [...prevFavorite, favoriteCar]); 
            return; 
        } 
        const isFavorite = favorite.find(car => car.id === carId);
        if (isFavorite) {
            const index = favorite.indexOf(isFavorite);
            const newFavorite = [...favorite];
            newFavorite.splice(index, 1);
            setFavorite(newFavorite);
        } else {
            const favoriteCar = cars.find(car =>  car.id === carId );
            setFavorite((prevFavorite) => [...prevFavorite, favoriteCar]);       
        }
    };
    
    const handleMakePagination = () => {
        const fetchData = async () => {
            try {
                const data = await axiosPagination(page);
                setCars((prevCars) => [...prevCars, ...data]);
                setPage((prevPage) => prevPage + 1);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }

    const handleMarkChange = (e) => {
        
    }

    const handlePriceChange = (e) => {
        
    }

    
    return (<>
        <form>
            <Select
                placeholder="Enter the text"
                options={optionsMark}
                onChange={handleMarkChange}
            />
             <Select
                placeholder="To $"
                options={optionsPrice}
                onChange={handlePriceChange}
             />
            <input type="text" />
            <input type="text" />
            <button>Search</button>
        </form>
        <CarCardList cars={cars} onHandleFavoriteCar={ handleFavoriteCar} />
        <button type="button" onClick={handleMakePagination}>Load More</button>
    </>
        )

}

export default CatalogPage;