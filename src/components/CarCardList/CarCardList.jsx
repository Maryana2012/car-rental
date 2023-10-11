import { AiOutlineHeart, AiFillHeart} from 'react-icons/ai';
import ModalElement from '../Modal/Modal';
import { useEffect, useState } from "react";

import { axiosCarsFilter } from '../../axios/axios';
import css from '../CarCardList/CarCardList.module.css'


const CarCardList = (props) => {
    const { cars } = props; 
    const [findCar, setFindCar] = useState('');
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [favorite, setFavorite] = useState(JSON.parse(window.localStorage.getItem('favorite')) ?? []);

        
    useEffect(() => {
        const favoriteStringify = JSON.stringify(favorite)
        localStorage.setItem("favorite", favoriteStringify)
    }, [favorite]);
      
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
   
    return (<>
        <ul className={css.list}>
            {cars.map((car) =>
                <li className={css.card}
                key={car.id}>
                <img className={css.image} src={car.img} alt="car" />
                    <button className={css.buttonFavorite} type="button" onClick={() =>handleFavoriteCar(car.id)}>
                        {favorite.find(favorite => favorite.id === car.id) ?
                        (<AiFillHeart className={css.heart} style={{ color: "blue" }}/>):
                        (<AiOutlineHeart className={css.heart}  />)
                        }
                        </button>
                <div className={css.textContainerFirst}>
                    <div>
                        <span className={css.textSubtitle}>{car.make}, </span>
                        <span className={css.textSubtitle}>{car.year}</span>
                    </div>
                        <span className={css.textSubtitle}>{car.rentalPrice}</span>
                </div>
                <div className={css.textContainerSecond}>
                    <span className={css.text}>{getCity(car.address)} </span>
                    <div className={css.stick}></div>
                    <span className={css.text}>{getCountry(car.address)} </span>
                    <div className={css.stick}></div>
                    <span className={css.text}>{car.rentalCompany}</span>
                </div>
                <div className={css.textContainerThird}>
                   <span className={css.text}>{car.type}</span>
                   <div className={css.stick}></div> 
                   <span className={css.text}>{car.model}</span>
                   <div className={css.stick}></div>
                   <span className={css.text}>{car.mileage}</span>
                   <div className={css.stick}></div>
                   <span className={css.text}>{car.accessories[0]}</span>
                </div>
                <button className={css.buttonLearnMore} type="button" onClick={() => handleLearnMore(car.id)}>Learn More</button>
            </li>)}
        </ul>
        < ModalElement findCar={findCar}
            modalStatus={modalIsOpen}
            closeModal={handleCloseModal } />
    </> )
}

export default CarCardList;