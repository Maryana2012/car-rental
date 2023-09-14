// import CarCard from "components/CarCard/CarCard";
import { useEffect } from "react";
import { useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";


const CarCardList = (props) => {
    const { cars } = props;
    const [favorite, setFavorite] = useState([]);
       
    useEffect(() => {
    const favoriteStringify = JSON.stringify(favorite)
        localStorage.setItem("favorite", favoriteStringify)
    }, [favorite])

    const handleMakeFavorite = (id) => {
        const favoriteCar = cars.find(car =>  car.id === id );
        setFavorite((prevFavorite) => [...prevFavorite, favoriteCar]);  
        
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
            </li>

                )}
        </ul>)
}

export default CarCardList;