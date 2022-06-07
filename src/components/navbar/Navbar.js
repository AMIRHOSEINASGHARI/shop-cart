import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

//tools
import shoppingBag from '../../tools/shopping-bag.png'

//context
import { CartContext } from '../../services/CartContextProvider';

const Navbar = () => {
    const {state} = useContext(CartContext)

    return (
        <div className={styles.navbar}>
            <Link to='/'>Products</Link>
            <Link to='/cart' className={styles.navbarImage}>
                <img src={shoppingBag} alt="shopping bag" />
                <span className={styles.itemsCounter}>{state.itemsCounter ===0 ? 0 : state.itemsCounter}</span>
            </Link>
        </div>
    );
};

export default Navbar;