import css from '../CarCardList/CarCardList.module.css'

const FavoriteCard = (props) => {

    const { favorite } = props;

     const getCity = (address) => {
       const city = address.split(",");
         if (city.length >= 2) {
           return city[1]; 
        } else {
         return ''; 
        }
    } 
     const getCountry = (address) => {
       const city = address.split(",");
         if (city.length >= 2) {
           return city[2]; 
        } else {
         return ''; 
        }
    } 
   
    return (
        <ul className={css.listFavorite}>
            {favorite.map((favorite) =>
                <li className={css.card}
                key={favorite.id}>
    
            <img className={css.image} src={favorite.img} alt="car" />
                <div className={css.textContainerFirst}>
                    <div>
                        <span className={css.textSubtitle}>{favorite.make}, </span>
                        <span className={css.textSubtitle}>{favorite.year}</span>
                    </div>
                        <span className={css.textSubtitle}>{favorite.rentalPrice}</span>
                </div>
                <div className={css.textContainerSecond}>
                        <span className={css.text}>{getCity(favorite.address)}</span>
                        <div className={css.stick}></div>
                        <span className={css.text}>{getCountry(favorite.address)}</span>
                        <div className={css.stick}></div>
                        <span className={css.text}>{favorite.rentalCompany}</span>
                </div>   
                <div className={css.textContainerThird}>
                    <span className={css.text}>{favorite.type}</span>
                    <div className={css.stick}></div>
                    <span className={css.text}>{favorite.model}</span>
                    <div className={css.stick}></div>
                    <span className={css.text}>{favorite.mileage}</span>
                    <div className={css.stick}></div>
                    <span className={css.text}>{favorite.accessories[0]}</span>
                </div>    
            <button className={css.buttonLearnMore} type="button">Learn More</button>
            </li>)}
        </ul>)
    
}

export default FavoriteCard;