import { useEffect, useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import Modal from 'react-modal';

import { axiosCarsFilter } from "../../axios/axios";
import css from '../CarCardList/CarCardList.module.css'

const rootElement = document.getElementById("root");
Modal.setAppElement(rootElement);

const CarCardList = (props) => {
    const { cars, onHandleFavoriteCar } = props;
    const [findCar, setFindCar] = useState('');
    const [modalIsOpen, setModalIsOpen] = useState(false);

    useEffect(() => {
        
    })

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

    // const openModal = () => {
    //     setModalIsOpen(true);
    // }

    const closeModal = () => {
        setModalIsOpen(false);
        setFindCar('')
    }
    return (<>
        <ul className={css.list}>
            {cars.map((car) => <li className={css.card}
                key={car.id}>
                <img className={css.image} src={car.img} alt="car" />
                <button className={css.buttonFavorite} type="button" onClick={() => handleMakeFavorite(car.id)}><AiOutlineHeart className={css.heart} /></button>
               
                <span>{car.make}</span>
                <span>{car.model}</span>
                <span>{car.year}</span>
                <span>{car.rentalPrice}</span>
                <span>{car.address}</span>
                <span>{car.rentalCompany}</span>
                <span>{car.type}</span>
                <span>{car.mileage}</span>
                <span>{car.accessories[0]}</span>
                <button type="button" onClick={() => handleLearnMore(car.id)}>Learn More</button>
            </li>)}
        </ul>
        <Modal isOpen={modalIsOpen}
            onRequestClose={closeModal}
        >
           { findCar && (<>
                <img src={findCar.img} alt='car'/>
                <button type="button" onClick={closeModal}>close</button>
                </>)}
            
        </Modal>
    </> )
}

export default CarCardList;