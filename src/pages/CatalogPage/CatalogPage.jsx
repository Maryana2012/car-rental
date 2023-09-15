import { useState, useEffect } from "react";
import Select from 'react-select';

import { axiosAllCars, axiosPagination,axiosCarsFilter } from "../../axios/axios";
import CarCardList from "components/CarCardList/CarCardList";
import { optionsMark,optionsPrice } from "../../data";

const CatalogPage = () => { 
    const [cars, setCars] = useState([]);
    const [page, setPage] = useState(1);
    const [favorite, setFavorite] = useState(JSON.parse(window.localStorage.getItem('favorite')) ?? []);
    const [selectMark, setSelectMark] = useState('');
    const [selectPrice, setSelectPrice] = useState('');
    const [inputFrom, setInputFrom] = useState('');
    const [inputTo, setInputTo] = useState('');
    const [allCars, setAllCars] = useState('');
    const [shouldRender, setShouldRender] = useState(false);
   

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
    }, [favorite]);

      
    useEffect(() => {
        if (shouldRender) {
            const filterCarArray = [...allCars];
            if (selectMark || selectPrice || (inputFrom && inputTo)) {
                const filtered = filterCarArray.filter((car) => {
                    const markCondition = !selectMark || car.make === selectMark;
                    const priceCondition = !selectPrice || Number(car.rentalPrice.replace(/[^0-9.-]+/g, "")) <= Number(selectPrice);
                    const mileageCondition = (!inputFrom && !inputTo) || (car.mileage >= inputFrom && car.mileage <= inputTo);
                    return markCondition && priceCondition && mileageCondition;
                });
                setCars(filtered);
            }

            setShouldRender(false);
        }
    }, [shouldRender, inputFrom, inputTo, selectMark, selectPrice, allCars]);

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
    }
    
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
    };

    const handleMarkChange = (e) => {
        setSelectMark(e.value);
    };

    const handlePriceChange = (e) => {
        setSelectPrice(e.value);
    };
    const handleFromChange = (e) => {
        setInputFrom(e.target.value);
    };
    const handleToChange = (e) => {
        setInputTo(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const fetchData = async () => {
            try {
                const data = await axiosCarsFilter();
                setAllCars(data);
                setShouldRender(true);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    };
    
    return (<>
        <form onSubmit={handleSubmit}>
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
            <input
                type="text"
                name="from"
                placeholder="from"
                onChange={handleFromChange}/>
            <input
                type="text"
                name="to"
                placeholder="to"
                onChange={handleToChange}/>
            <button>Search</button>
        </form>
        <CarCardList cars={cars} onHandleFavoriteCar={ handleFavoriteCar} />
        <button type="button" onClick={handleMakePagination}>Load More</button>
    </>
        )

}

export default CatalogPage;