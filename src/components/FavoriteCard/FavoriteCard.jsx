import { AiOutlineHeart } from "react-icons/ai";

const FavoriteCard = (props) => {

    const { favorite } = props;
   
    return (
        <ul>
        {favorite.map((favorite) => <li key={favorite.id}>
    
            <img src={favorite.img} alt="car" />
            <button type="button"
            // onClick={() => handleMakeFavorite(favorite.id)}
            >
                <AiOutlineHeart /></button>
            
            <span>{favorite.make}</span>
            <span>{favorite.model}</span>
            <span>{favorite.year}</span>
            <span>{favorite.rentalPrice}</span>
            <span>{favorite.address}</span>
            <span>{favorite.rentalCompany}</span>
            <span>{favorite.type}</span>
            <span>{favorite.mileage}</span>
            <span>{favorite.accessories[0]}</span>
            <button type="button">Learn More</button>
            </li>

                )}
        </ul>)
    
}

export default FavoriteCard;