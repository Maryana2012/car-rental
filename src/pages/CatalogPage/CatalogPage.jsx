import { useState, useEffect } from "react";
import Select from 'react-select';

import { axiosAllCars, axiosPagination,axiosCarsFilter } from "../../axios/axios";
import { optionsMark, optionsPrice, customStylesMark,customStylesPrice } from "../CatalogPage/SelectStyles";
import CarList from '../../components/CarList/CarList';
import css from "../CatalogPage/CatalogPage.module.css"

const CatalogPage = () => { 
    const [cars, setCars] = useState([]);
    const [page, setPage] = useState(1);   
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
        if (shouldRender) {
            const filterCarArray = [...allCars];
               if (selectMark || selectPrice || (inputFrom && inputTo)) {
               const newInputFrom = inputFrom.replace(/,/g, '')
               const newInputTo = inputTo.replace(/,/g, '')
                const filtered = filterCarArray.filter((car) => {
                    const markCondition = !selectMark || car.make === selectMark.value;
                    const priceCondition = !selectPrice || Number(car.rentalPrice.replace(/[^0-9.-]+/g, "")) <= Number(selectPrice.value);
                    const mileageCondition = (!inputFrom && !inputTo) || (car.mileage >= newInputFrom && car.mileage <= newInputTo);
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
        let value = e.target.value.replace(/,/g, ''); 
        if (!isNaN(value)) {
            setInputFrom(parseInt(value, 10).toLocaleString('en-US'));
        };
    }
    const handleToChange = (e) => {
            let value = e.target.value.replace(/,/g, ''); 
            if (!isNaN(value)) {
                setInputTo(parseInt(value, 10).toLocaleString('en-US'));;
            };
        }

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

    // const customStylesMark = {
    //    control: (provided) => ({
    //    ...provided,
    //         width: 224, 
    //         height: 48,
    //         borderRadius: 14,
    //         background: '#F7F7FB',
    //         border: 'none',
    //         marginRight: 18,
    //         fontFamily: 'Manrope, sans-serif',
    //         fontSize: 18,
    //         fontWeight: 500, 
    //         color: '#121417',
    //         paddingLeft: 18,
            
    //     }),
    //     placeholder: (provided) => ({
    //         ...provided,
    //         color: '#121417',
    //         fontFamily: 'Manrope, sans-serif',
    //         fontSize: 18,
    //         fontWeight: 500,
    //        })
    // };

    // const customStylesPrice = {
    //    control: (provided) => ({
    //    ...provided,
    //         width: 125, 
    //         height: 48,
    //         borderRadius: 14,
    //         background: '#F7F7FB',
    //         border: 'none',
    //         marginRight: 18,
    //         fontFamily: 'Manrope, sans-serif',
    //         fontSize: 18,
    //         fontWeight: 500,
    //         color: '#121417',
    //         paddingLeft: 18
    //     }),
    //     placeholder: (provided) => ({
    //         ...provided,
    //         color: '#121417',
    //         fontFamily: 'Manrope, sans-serif',
    //         fontSize: 18,
    //         fontWeight: 500,
    //        }),
    // };


    
    return (<main className={css.container}>
        <section>
            <form className={css.form} onSubmit={handleSubmit}>
            <label className={css.labelForm}>Car brand
            <Select
                styles={customStylesMark}
                placeholder="Enter the text"
                options={optionsMark}
                value={selectMark}
                onChange={handleMarkChange}
                    />
                </label>
            <label className={css.labelForm}>Price/ 1 hour
            <Select styles={customStylesPrice}
                placeholder="To $"
                options={optionsPrice}
                value={selectPrice}
                onChange={handlePriceChange}
            /></label>
            <label className={css.labelForm}>Сar mileage / km
            <label className={css.labelFrom}>From</label>
            <input className={css.inputFrom }
                type="text"
                name="from"
                value={inputFrom}
                        onChange={handleFromChange} />
                </label>
            <label className={css.labelForm}>.
            <label className={css.labelTo}>To</label>
            <input className={css.inputTo}
                type="text"
                name="to"
                value={inputTo}
                        onChange={handleToChange} />
            </label>
            <label className={css.labelForm}>.  
                    <button className={css.buttonSearch}>Search</button>
            </label>    
        </form>
        </section>
        <section className={css.sectionList}>
            <CarList cars={cars} />
            {cars.length >= 8 && cars.length < 25 &&
                (<button className={css.buttonLoadMore} type="button" onClick={handleMakePagination}>Load More</button>)}
        </section>
    </main>
        )

}

export default CatalogPage;