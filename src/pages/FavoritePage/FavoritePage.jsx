import { useEffect, useState } from "react";
import CarList from "components/CarList/CarList";
import css from "../FavoritePage/FavoritePage.module.css";

const FavoritePage = () => { 
  const [favorite, setFavorite] = useState(JSON.parse(window.localStorage.getItem('favorite')) ?? []);
       
   useEffect(() => {
        const favoriteStringify = JSON.stringify(favorite);
        localStorage.setItem("favorite", favoriteStringify);     
   }, [favorite]);

  const handleFavoriteCar = (id) => {
        const isFavorite = favorite.find(car => car.id === id);
        if (isFavorite) {
            const index = favorite.indexOf(isFavorite);
            const newFavorite = [...favorite];
            newFavorite.splice(index, 1);
            setFavorite(newFavorite);
        } 
    }
        
   return (<main className={css.container}> 
           <CarList cars={favorite}
              favorite={favorite}
              handleFavoriteCar={handleFavoriteCar}/>
          </main>)
}

export default FavoritePage;