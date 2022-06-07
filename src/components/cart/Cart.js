import React, { useContext } from 'react';
import CartProduct from './CartProduct';
import { Link } from 'react-router-dom';
import styles from './Cart.module.css';

//context
import { CartContext } from '../../services/CartContextProvider';

const Cart = () => {
    const {state , dispatch} = useContext(CartContext)

    return (
        <div className={styles.cartContainer}>
            <div className={styles.topSection}>
                {
                    state.itemsCounter >0 &&
                    <div className={styles.cartPayments}>
                        <div>
                            <p><span>Total items:</span> {state.itemsCounter}</p>
                            <p><span>Total payments:</span> {state.totalPrice} $</p>
                        </div>
                        <div>
                            <button onClick={() => dispatch({type: 'CLEAR'})}>Clear</button>
                            <button onClick={() => dispatch({type: 'CHECK_OUT'})}>Checkout</button>
                        </div>
                    </div>
                }

                {
                    state.itemsCounter ===0 && state.checkout &&
                    <div>
                        <h1>Checked out Successfully</h1>
                        <Link to='/'>Buy more!</Link>
                    </div>
                }

                {
                    state.itemsCounter ===0 && !state.checkout &&
                    <div>
                        <h1>Cart is empty</h1>
                        <Link to='/'>Back to Shop</Link>
                    </div>
                }
            </div>
            <div className={styles.shopCartProduct}>
                {
                    state.selectedItems.map(item => <CartProduct key={item.id} data={item} />)
                }
            </div>
        </div>
    );
};

export default Cart;