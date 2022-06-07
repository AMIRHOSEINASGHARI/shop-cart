import React, { useContext } from 'react';

//context
import { CartContext } from '../../services/CartContextProvider';
import CartProduct from './CartProduct';

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