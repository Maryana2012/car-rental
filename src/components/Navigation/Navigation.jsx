import { NavLink } from "react-router-dom";
import css from '../Navigation/Navigation.module.css';

const Navigation = () => {
    return (
        <nav className={css.container}>
            <NavLink className={css.navLink} to='/' style={({isActive})=>{return{color: isActive?'#3470FF':'white'}}}><span className={css.text}>Home</span></NavLink>
            <NavLink className={css.navLink} to='/catalog' style={({isActive})=>{return{color: isActive?'#3470FF':'white'}}}><span className={css.text}>Catalog</span></NavLink>
            <NavLink className={css.navLink} to='/favorites' style={({isActive})=>{return{color: isActive?'#3470FF':'white'}}}><span className={css.text}>Favorite</span></NavLink>
        </nav>
        
    )
}

export default Navigation;