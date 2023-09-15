import FavoriteCard from "components/FavoriteCard/FavoriteCard";

const FavoritePage = () => { 
        const favoriteLocalStorage = localStorage.getItem("favorite");
        const favorite = JSON.parse(favoriteLocalStorage);

   return (<> 
          <FavoriteCard favorite={favorite} />
          </>)
}

export default FavoritePage;