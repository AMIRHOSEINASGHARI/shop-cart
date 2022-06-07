import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

//tools
import shoppingBag from '../../tools/shopping-bag.png'

//context
import { CartContext } from '../../services/CartContextProvider';

const Navbar = () => {
    const {state} = useContext(CartContext)

    return (
        <div>
            <Link to='/'>Products</Link>
            <Link to='/cart'>
                <img src={shoppingBag} alt="shopping bag" />
                <span>{state.itemsCounter ===0 ? 0 : state.itemsCounter}</span>
            </Link>
        </div>
    );
};

export default Navbar;