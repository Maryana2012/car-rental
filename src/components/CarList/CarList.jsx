import { useEffect, useState } from 'react';
import CarCard from '../CarCard/CarCard';
import css from '../CarList/CarList.module.css'

const CarList = ({cars}) => {
   
    const [favorite, setFavorite] = useState(JSON.parse(window.localStorage.getItem('favorite')) ?? []);
    
    useEffect(() => {
        const favoriteStringify = JSON.stringify(favorite);
        localStorage.setItem("favorite", favoriteStringify);
    }, [favorite]);
   
    const handleFavoriteCar = (id) => {
        if (favorite.length === 0) {
            const favoriteCar = cars.find(car => car.id === id);
            setFavorite((prevFavorite) => [...prevFavorite, favoriteCar]); 
            return; 
        } 
        const isFavorite = favorite.find(car => car.id === id);
        if (isFavorite) {
            const index = favorite.indexOf(isFavorite);
            const newFavorite = [...favorite];
            newFavorite.splice(index, 1);
            setFavorite(newFavorite);
        } else {
            const favoriteCar = cars.find(car =>  car.id === id );
            setFavorite((prevFavorite) => [...prevFavorite, favoriteCar]);       
        }
    }
    return (
        <ul className={css.list}>
            {cars.map((car) =>
                < CarCard key={car.id}
                    id={car.id}
                    img={car.img}
                    make={car.make}
                    year={car.year}
                    rentalPrice={car.rentalPrice}
                    address={car.address}
                    rentalCompany={car.rentalCompany}
                    type={car.type}
                    model={car.model}
                    mileage={car.mileage}
                    favorite={favorite}
                    accessories={car.accessories[0]}
                    makeFavorite={handleFavoriteCar}/> )}
        </ul>)
}

export default CarList;