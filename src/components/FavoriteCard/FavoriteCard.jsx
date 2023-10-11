import { useEffect, useState } from 'react';

import { AiFillHeart } from 'react-icons/ai';
import { axiosCarsFilter } from '../../axios/axios';
import ModalElement from '../Modal/Modal';
import css from '../CarCardList/CarCardList.module.css'

const FavoriteCard = () => {
    const [findCar, setFindCar] = useState('');
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [favorite, setFavorite] = useState(JSON.parse(window.localStorage.getItem('favorite')) ?? []);
 
     useEffect(() => {
        const favoriteStringify = JSON.stringify(favorite)
        localStorage.setItem("favorite", favoriteStringify)
     }, [favorite]);
    
     const handleFavoriteCar = (carId) => {
        if (favorite.length === 0) {
           const favoriteCar = favorite.find(car =>  car.id === carId );
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
            const favoriteCar = favorite.find(car =>  car.id === carId );
            setFavorite((prevFavorite) => [...prevFavorite, favoriteCar]);       
        }
    }

   const handleCloseModal = () => {
        setModalIsOpen(false);
        setFindCar('')
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
  
    return (
       <>
        <ul className={css.listFavorite}>
            {favorite.map((favorite) =>
                <li className={css.card}
                key={favorite.id}>

            <img className={css.image} src={favorite.img} alt="car" />
            <button className={css.buttonFavorite} type="button" onClick={() =>handleFavoriteCar(favorite.id)}>
                     <AiFillHeart className={css.heart} style={{ color: "blue" }}/>
            </button>
            <div className={css.textContainerFirst}>
                    <div>
                        <span className={css.textSubtitle}>{favorite.make}, </span>
                        <span className={css.textSubtitle}>{favorite.year}</span>
                    </div>
                        <span className={css.textSubtitle}>{favorite.rentalPrice}</span>
                </div>
                <div className={css.textContainerSecond}>
                        <span className={css.text}>{getCity(favorite.address)}</span>
                        <div className={css.stick}></div>
                        <span className={css.text}>{getCountry(favorite.address)}</span>
                        <div className={css.stick}></div>
                        <span className={css.text}>{favorite.rentalCompany}</span>
                </div>   
                <div className={css.textContainerThird}>
                    <span className={css.text}>{favorite.type}</span>
                    <div className={css.stick}></div>
                    <span className={css.text}>{favorite.model}</span>
                    <div className={css.stick}></div>
                    <span className={css.text}>{favorite.mileage}</span>
                    <div className={css.stick}></div>
                    <span className={css.text}>{favorite.accessories[0]}</span>
                </div>    
            <button className={css.buttonLearnMore} type="button" onClick={() => handleLearnMore(favorite.id)}>Learn More</button>
            </li>)}
            </ul>
            < ModalElement findCar={findCar}
            modalStatus={modalIsOpen}
            closeModal={handleCloseModal } />
            
            </>
    )


}
export default FavoriteCard;