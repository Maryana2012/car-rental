const CarCard = (props) => {
    const { img, make, model, year, rentalPrice, address, rentalCompany, type, mileage, accessories } = props;
    return (<li>
            <img src={img} alt="car" />
            <span>{make}</span>
            <span>{model}</span>
            <span>{year}</span>
            <span>{rentalPrice}</span>
            <span>{address}</span>
            <span>{rentalCompany}</span>
            <span>{type}</span>
            <span>{mileage }</span>
            <span>{accessories[0]}</span>
            <button type="button">Learn More</button>

        </li>
    )
}

export default CarCard;