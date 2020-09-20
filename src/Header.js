import React,{useContext} from 'react'
import classes from './Header.module.css';
import { Link } from 'react-router-dom';
import ShoppingBasketSharpIcon from '@material-ui/icons/ShoppingBasketSharp';
import SearchIcon from '@material-ui/icons/Search';
import { StateContext } from './StateProvider';
import { auth } from './firebase';


function Header() {
    const [state] = useContext(StateContext);
    
    const login = () => {
        if(state.user) {
            auth.signOut()
        }
    }
    return (
        <nav className={classes.header}>
            <Link to="/">
                <img 
                    className={classes.header__logo} 
                    src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" 
                    alt="amazon logo"
                />    
            </Link>

            <div className={classes.header__search}>
                <input type="text" className={classes.header__searchInput}/>
                <SearchIcon className={classes.header__searchIcon} />
            </div>
            <div className={classes.header__nav}>

                <Link to={!state.user ? "/login" : "/"} className={classes.header__link}>
                    <div onClick={login} className={classes.header__option}>
                        <span>Hello {!state.user ? "Guest" : state.user.email}</span>
                        <span>{state.user ? "Sign Out" : "Sign In" }</span>
                    </div>
                </Link>

                <Link to="/orders" className={classes.header__link}>
                    <div className={classes.header__option}>
                        <span>Returns</span>
                        <span>& Orders</span>
                    </div>
                </Link>

                <Link to="/login" className={classes.header__link}>
                    <div className={classes.header__option}>
                        <span>Your</span>
                        <span>Prime</span>
                    </div>
                </Link>

                <Link to="/checkout" className={classes.header__link}>
                    <div className={classes.header__optionBasket}>
                        <ShoppingBasketSharpIcon />
                        <span>{state.basket.length}</span>
                    </div>
                </Link>

                
            </div>
            
        </nav>
    )
}

export default Header;
