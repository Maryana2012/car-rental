import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
        <nav>
            <NavLink to='/'><span>Home</span></NavLink>
            <NavLink to='/catalog'><span>Catalog</span></NavLink>
            <NavLink to='/favorite'><span>Favorite</span></NavLink>
        </nav>
    )
}

export default Navigation;