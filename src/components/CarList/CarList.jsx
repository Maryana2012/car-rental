import CarCard from '../CarCard/CarCard';
import css from '../CarList/CarList.module.css'

const CarList = ({cars, favorite, handleFavoriteCar}) => {
   
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
                    makeFavorite={handleFavoriteCar} />
            )}
        </ul>)
}

export default CarList;