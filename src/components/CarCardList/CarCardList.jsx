import CarCard from "components/CarCard/CarCard";

const CarCardList = (props) => {
    const {cars} = props;
    return ( <ul>
            {cars.map((car) => 
                <CarCard key={car.id}
                    img={car.img}
                    make={car.make}
                    model={car.model}
                    year={car.year}
                    rentalPrice={car.rentalPrice}
                    address={car.address}
                    rentalCompany={car.rentalCompany}
                    type={car.type}
                    mileage={car.mileage}
                    accessories={car.accessories}

                />)}
        </ul>)
}

export default CarCardList;