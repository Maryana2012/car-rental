import { useState, useEffect } from "react";
import Select from 'react-select';
// import 'react-select/dist/react-select.css'

import { axiosAllCars, axiosPagination,axiosCarsFilter } from "../../axios/axios";
import CarCardList from "components/CarCardList/CarCardList";
import { optionsMark, optionsPrice } from "../../data";
import css from "../CatalogPage/CatalogPage.module.css"
// import customStyle from "../CatalogPage/selectStyles"

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
            // console.log(selectMark)
            if (selectMark || selectPrice || (inputFrom && inputTo)) {
                const filtered = filterCarArray.filter((car) => {
                    const markCondition = !selectMark || car.make === selectMark.value;
                    const priceCondition = !selectPrice || Number(car.rentalPrice.replace(/[^0-9.-]+/g, "")) <= Number(selectPrice.value);
                    const mileageCondition = (!inputFrom && !inputTo) || (car.mileage >= inputFrom && car.mileage <= inputTo);
                    return markCondition && priceCondition && mileageCondition;
                });
                setCars(filtered);
                setInputFrom('');
                setInputTo('');
                setSelectMark('');
                setSelectPrice('')
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

    const handleMarkChange = (selectedOption) => {
        setSelectMark(selectedOption);
    };

    const handlePriceChange = (selectedOption) => {
        setSelectPrice(selectedOption);
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
                ;
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    };

    const customStylesMark = {
       control: (provided) => ({
       ...provided,
            width: 224, 
            height: 48,
            borderRadius: 14,
            background: '#F7F7FB',
            border: 'none',
            marginRight: 18,
            fontFamily: 'Manrope, sans-serif',
            fontSize: 18,
            fontWeight: 500, 
            color: '#121417',
            paddingLeft: 18,
            
       }),
    };

    const customStylesPrice = {
       control: (provided) => ({
       ...provided,
            width: 125, 
            height: 48,
            borderRadius: 14,
            background: '#F7F7FB',
            border: 'none',
            marginRight: 18,
            fontFamily: 'Manrope, sans-serif',
            fontSize: 18,
            fontWeight: 500,
            color: '#121417',
            paddingLeft: 18
       }),
    };


    
    return (<main className={css.container}>
        <section>
        <form  className={css.form} onSubmit={handleSubmit}>
            <Select
                styles={customStylesMark}
                placeholder="Enter the text"
                options={optionsMark}
                value={selectMark}
                onChange={handleMarkChange}
            />
             <Select   styles={customStylesPrice}
                placeholder="To $"
                options={optionsPrice}
                // value={selectPrice}
                onChange={handlePriceChange}
             />
            <label className={css.labelFrom}>From</label>
            <input className={css.inputFrom }
                type="text"
                name="from"
                value={inputFrom}
                onChange={handleFromChange} />
            <label className={css.labelTo}>To</label>
            <input className={css.inputTo}
                type="text"
                name="to"
                value={inputTo}
                onChange={handleToChange}/>
            <button className={css.buttonSearch}>Search</button>
        </form>
        </section>
        <section className={css.sectionList}>
        <CarCardList cars={cars} onHandleFavoriteCar={ handleFavoriteCar} />
        <button className={css.buttonLoadMore} type="button" onClick={handleMakePagination}>Load More</button>
        </section>
    </main>
        )

}

export default CatalogPage;