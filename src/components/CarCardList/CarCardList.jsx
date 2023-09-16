import { useEffect, useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import {AiOutlineClose} from "react-icons/ai"
import Modal from 'react-modal';

import { axiosCarsFilter } from "../../axios/axios";
import css from '../CarCardList/CarCardList.module.css'

const rootElement = document.getElementById("root");
Modal.setAppElement(rootElement);

const CarCardList = (props) => {
    const { cars, onHandleFavoriteCar } = props;
    const [findCar, setFindCar] = useState('');
    const [modalIsOpen, setModalIsOpen] = useState(false);

  
    const handleMakeFavorite = (carId) => {
        onHandleFavoriteCar(carId)
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

    const closeModal = () => {
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

    const modalStyles = {
         overlay: {
           backgroundColor: 'rgba(0, 0, 0, 0.5)',
           zIndex:10
    },
        content: {
            width: 541,
            height: 752,
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            marginTop: 40,
            paddingLeft: 15,
            paddingRight: 15,
            paddingTop: 35,
            paddingBottom:35,
            transform: 'translate(-50%, -50%)',
        }
};
    return (<>
        <ul className={css.list}>
            {cars.map((car) =>
                <li className={css.card}
                key={car.id}>
                <img className={css.image} src={car.img} alt="car" />
                <button className={css.buttonFavorite} type="button" onClick={() => handleMakeFavorite(car.id)}><AiOutlineHeart className={css.heart} /></button>
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
        <Modal style={modalStyles}
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
        >
           { findCar && (<>
                <img className={css.imageModal} src={findCar.img} alt='car'/>
                <button type="button" onClick={closeModal}><AiOutlineClose/></button>
                </>)}
            
        </Modal>
    </> )
}

export default CarCardList;