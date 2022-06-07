import React from 'react';
import { Link } from 'react-router-dom';

//tools
import shoppingBag from '../../tools/shopping-bag.png'

const Navbar = () => {
    return (
        <div>
            <Link to='/'>Products</Link>
            <Link to='/cart'>
                <img src={shoppingBag} alt="shopping bag" />
            </Link>
        </div>
    );
};

export default Navbar;