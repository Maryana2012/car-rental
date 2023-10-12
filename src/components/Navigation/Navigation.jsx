import { NavLink } from "react-router-dom";
import css from '../Navigation/Navigation.module.css';

const Navigation = () => {
    return (
        <nav className={css.container}>
            <NavLink className={css.navLink} to='/' ><span className={css.text}>Home</span></NavLink>
            <NavLink className={css.navLink} to='/catalog' ><span className={css.text}>Catalog</span></NavLink>
            <NavLink className={css.navLink} to='/favorite' ><span className={css.text}>Favorite</span></NavLink>
        </nav>
        
    )
}

export default Navigation;