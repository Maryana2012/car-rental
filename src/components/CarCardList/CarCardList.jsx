import { useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import {AiOutlineClose} from "react-icons/ai"
import Modal from 'react-modal';

import { axiosCarsFilter } from "../../axios/axios";
import css from '../CarCardList/CarCardList.module.css'

const rootElement = document.getElementById('root');
console.log(rootElement)
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
    const getConditions = (conditions) => {
       const conditionArray = conditions.split("\n");
        return conditionArray;
    } 


    const modalStyles = {
         overlay: {
           backgroundColor: 'rgba(0, 0, 0, 0.5)',
           zIndex:10
    },
        content: {
            position: 'relative',
            display: 'flex',
            flexDirection:'column',
            // justifyContent: 'center',
            // alignItems: 'center',
            width: 541,
            height: 752,
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            marginTop: 40,
            padding: 0,
            paddingTop:40,
            paddingBottom: 40,
            paddingLeft: 40,
            paddingRight:40,
            transform: 'translate(-50%, -50%)',
            borderRadius: 24,
            background: '#FFF',
        }
    };
    return (<>
        <ul className={css.list} id="list">
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
            {findCar && (<>
                <img className={css.imageModal} src={findCar.img} alt='car' />
                <button className={css.buttonClose} type="button" onClick={closeModal}><AiOutlineClose /></button>
                <div className={css.modalSubtitleContainer}>
                    <span className={css.modalSubtitleText}>{findCar.make}</span>
                    <span className={css.modalSubtitleTextModel}>{findCar.model},</span>
                    <span className={css.modalSubtitleText}>{findCar.year}</span>
                </div>
                <div className={css.modalContainerFirst}>
                    <span className={css.modalTextFirst}>{getCity(findCar.address)}</span>
                    <div className={css.stick}></div>
                    <span className={css.modalTextFirst}>{getCountry(findCar.address)}</span>
                    <div className={css.stick}></div>
                    <span className={css.modalTextFirst}>Id:{findCar.id}</span>
                    <div className={css.stick}></div>
                    <span className={css.modalTextFirst}>Year:{findCar.year}</span>
                    <div className={css.stick}></div>
                    <span className={css.modalTextFirst}>Type:{findCar.suv}</span>
                </div>
                <div className={css.modalContainerFirst}>
                    <span className={css.modalTextFirst}>Fuel Consumption: {findCar.fuelConsumption}</span>
                    <div className={css.stick}></div>
                    <span className={css.modalTextFirst}>Engine Size: {findCar.engineSize} </span>
                    <div className={css.stick}></div>
                </div>
                <p className={css.modalDescription}>{findCar.description}</p>
                <p className={css.modalAccessoriesTitle}>Accessories and functionalities:</p>
                <div className={css.modalAccessory}>{findCar.accessories.map((accessory) =>
                    <><span key={accessory} className={css.modalTextFirst}>{accessory}</span>
                        <div className={css.stick}></div></>)
                }
                </div>
                <p className={css.modalAccessoriesTitle}>Rental Conditions: </p>
                <p>{getConditions(findCar.rentalConditions).map(car =>
                    <span key={car} className={css.modalConditionsItem}>{car}</span>)}</p>
                <a href="tel: +380730000000" className={css.buttonRentalCar}>Rental car</a>
           
            </>)}
              
        </Modal>
    </> )
}

export default CarCardList;