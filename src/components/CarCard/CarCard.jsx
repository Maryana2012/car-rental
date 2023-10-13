import { useState } from 'react';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

import { axiosCarsFilter } from '../../axios/axios';
import ModalElement from '../Modal/Modal';
import css from '../CarCard/CarCard.module.css';

const CarCard = ({ id, img, make, year, rentalPrice, address, rentalCompany, type, model, mileage, accessories, makeFavorite, favorite }) => {

    const [findCar, setFindCar] = useState('');
    const [modalIsOpen, setModalIsOpen] = useState(false);
   
    const handleFavoriteCar = (id) => {
        makeFavorite(id);
    }
    
    const handleLearnMore = (carId) => {
        setModalIsOpen(true);
        const fetchData = async () => {
            try {
                const data = await axiosCarsFilter();
                const findCar = data.find(car => car.id === carId);
                setFindCar(findCar);
            } catch (error) {
                console.log(error.message);
            }
        }
        fetchData();
    }   
     const getCity = (address) => {
       const city = address.split(",");
         if (city.length >= 2) {
           return city[1]; 
        } else {
         return ''; 
        }
    } 
     const getCountry = (address) => {
       const city = address.split(",");
         if (city.length >= 2) {
           return city[2]; 
        } else {
         return ''; 
        }
    } 

    const handleCloseModal = () => {
        setModalIsOpen(false);
        setFindCar('')
    }
   
    return (<>
                <li className={css.card}
                    key={id}>
                    <img className={css.image} src={img} alt="car" />
                    <button className={css.buttonFavorite} type="button" onClick={() => handleFavoriteCar(id)}>
                    { favorite.find(favorite => favorite.id === id)?
                            (<AiFillHeart className={css.heart} style={{ color: "blue" }} />) :
                            (<AiOutlineHeart className={css.heart} />)}
                    
                    </button>
                    <div className={css.textContainerFirst}>
                        <div>
                            <span className={css.textSubtitle}>{make}, </span>
                            <span className={css.textModel}>{model} </span>
                            <span className={css.textSubtitle}>{year}</span>
                        </div>
                        <span className={css.textSubtitle}>{rentalPrice}</span>
                    </div>
                    <div className={css.textContainerSecond}>
                        <span className={css.text}>{getCity(address)} </span>
                        <div className={css.stick}></div>
                        <span className={css.text}>{getCountry(address)} </span>
                        <div className={css.stick}></div>
                        <span className={css.text}>{rentalCompany}</span>
                    </div>
                    <div className={css.textContainerThird}>
                        <span className={css.text}>{type}</span>
                        <div className={css.stick}></div>
                        <span className={css.text}>{model}</span>
                        <div className={css.stick}></div>
                        <span className={css.text}>{mileage}</span>
                        <div className={css.stick}></div>
                        <span className={css.text}>{accessories[0]}</span>
                    </div>
                    <button className={css.buttonLearnMore} type="button" onClick={() => handleLearnMore(id)}>Learn More</button>
        </li>
         < ModalElement findCar={findCar}
            modalStatus={modalIsOpen}
            closeModal={handleCloseModal } />
       
    </>)
};

export default CarCard;