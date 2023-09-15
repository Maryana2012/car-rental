import { AiOutlineHeart } from "react-icons/ai";
import Modal from 'react-modal';

import { axiosLearnMore } from "../../axios/axios";

const rootElement = document.getElementById("root");
Modal.setAppElement(rootElement);

const CarCardList = (props) => {
    const { cars, onHandleFavoriteCar } = props;


    
    const handleMakeFavorite = (carId) => {
        onHandleFavoriteCar(carId)
    }
   
    const handleLearnMore = (carId) => {
        const fetchData = async (carId) => {
            try {
                const data = await axiosLearnMore(carId)
                console.log(data);
            } catch (error) {
                console.log(error.message);
            }
        }
        fetchData(carId)
    }

    return ( <ul>
        {cars.map((car) => <li key={car.id}>
            <img src={car.img} alt="car" />
            <button type="button" onClick={()=>handleMakeFavorite(car.id)}><AiOutlineHeart /></button>
            <span>{car.make}</span>
            <span>{car.model}</span>
            <span>{car.year}</span>
            <span>{car.rentalPrice}</span>
            <span>{car.address}</span>
            <span>{car.rentalCompany}</span>
            <span>{car.type}</span>
            <span>{car.mileage}</span>
            <span>{car.accessories[0]}</span>
            <button type="button" onClick={()=>handleLearnMore(car.id)}>Learn More</button>
            </li>)}
        </ul>)
}

export default CarCardList;