import { useState } from "react";

import FavoriteCard from "components/FavoriteCard/FavoriteCard";

const FavoritePage = () => { 
const [favorite, setFavorite] = useState(JSON.parse(window.localStorage.getItem('favorite')) ?? []);

return (<> 
        <FavoriteCard favorite={favorite} />
       </>)
}

export default FavoritePage;