// import CarCard from "components/CarCard/CarCard";

import { AiOutlineHeart } from "react-icons/ai";


const CarCardList = (props) => {
    
    const { cars, onHandleFavoriteCar } = props;
    
    const handleMakeFavorite = (carId) => {
        onHandleFavoriteCar(carId)
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
            <button type="button">Learn More</button>
            </li>)}
        </ul>)
}

export default CarCardList;