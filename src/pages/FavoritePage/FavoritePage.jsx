import { useEffect, useState } from "react";

import FavoriteCard from "components/FavoriteCard/FavoriteCard";

const FavoritePage = () => { 
const [favorite, setFavorite] = useState([]);

    useEffect(() => {
        try {
            const favorite = localStorage.getItem("favorite");
            const favoriteParsed = JSON.parse(favorite);
            setFavorite(favoriteParsed);
        } catch (error) {
            console.log(error.message);
        }

    }, []);

    
    return (<> 
        <FavoriteCard favorite={favorite} />
    </>)
}

export default FavoritePage;