import CarList from "components/CarList/CarList";
import { useEffect, useState } from "react";
import css from "../FavoritePage/FavoritePage.module.css";

const FavoritePage = () => { 
   const [favorite, setFavorite] = useState([]);
       
   useEffect(() => {
       const favoriteLocalStorage = localStorage.getItem("favorite");
           const favorite = JSON.parse(favoriteLocalStorage);
           setFavorite(favorite)
   }, [favorite]);
        
   return (<main className={css.container}> 
          <CarList cars={favorite} />
          </main>)
}

export default FavoritePage;