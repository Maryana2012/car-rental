import Modal from 'react-modal';
import { AiOutlineClose } from 'react-icons/ai';

import css from '../Modal/Modal.module.css'
import { useState } from 'react';
import { useEffect } from 'react';
const rootElement = document.getElementById('root');
Modal.setAppElement(rootElement);
const ModalElement = ({ findCar, modalStatus, closeModal }) => {

    const [modalIsOpen, setModalIsOpen] = useState(false);
    
    useEffect(() => {
        setModalIsOpen(modalStatus)
    }, [modalStatus]);
    
    console.log(findCar);
    console.log(modalStatus);
    console.log(modalIsOpen);

    const handleCloseModal = () => {
        closeModal();
    }

    const getConditions = (conditions) => {
        const conditionArray = conditions.split("\n");
        return conditionArray;
    } 
    const getCountry = (address) => {
       const city = address.split(",");
         if (city.length >= 2) {
           return city[2]; 
        } else {
         return ''; 
        }
    } 
     const getCity = (address) => {
       const city = address.split(",");
         if (city.length >= 2) {
           return city[1]; 
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
            position: 'relative',
            display: 'flex',
            flexDirection:'column',
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
    return (
        <>
            <Modal style={modalStyles}
            isOpen={modalIsOpen}
            onRequestClose={handleCloseModal}> 
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
                    <span className={css.modalTextFirst}>Type:{findCar.type}</span>
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
                <div className={css.modalAccessory}>
                <span className={css.modalConditionsItem}>Mileage: <span className={css.modalMileage}>{findCar.mileage.toLocaleString('en-US')}</span></span>
                <span className={css.modalConditionsItem}>Price: <span className={css.modalMileage}>{findCar.rentalPrice}</span></span>
                </div>
                
                
                <a href="tel: +380730000000" className={css.buttonRentalCar}>Rental car</a>
           
            </>)}      
         </Modal> 
    </>)
}

export default ModalElement;