import Navigation from "../Navigation/Navigation";
import css from '../Header/Header.module.css'

const Header = () => {
    return (
        <header className={css.container}>
            <Navigation/>
        </header>
    
    )
}

export default Header;
