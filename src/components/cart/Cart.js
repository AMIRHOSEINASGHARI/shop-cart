import React, { useContext } from 'react';
import CartProduct from './CartProduct';

//context
import { CartContext } from '../../services/CartContextProvider';

const Cart = () => {
    const {state} = useContext(CartContext)

    return (
        <div>
            <div>
                {
                    state.selectedItems.map(item => <CartProduct key={item.id} data={item} />)
                }
            </div>
        </div>
    );
};

export default Cart;