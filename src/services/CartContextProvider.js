import React, { createContext, useReducer } from 'react';

const initialState = {
    selectedItems: [],
    itemsCounter: 0,
    totalPrice: 0,
    checkout: false
}
const cartReducer = (state , action) => {
    switch (action.type) {
        case 'ADD_ITEM' :
            if(!state.selectedItems.find(item => item.id === action.payload.id)) {
                state.selectedItems.push({
                    ...action.payload,
                    quantity: 1
                })
            }
            return {
                ...state
            }
        case 'REMOVE_ITEM' :
            const index = state.selectedItems.findIndex(item => item.id === action.payload.id)
            state.selectedItems.splice(index , 1)
            return {
                ...state
            }
        case 'INCREASE' :
            const indexI = state.selectedItems.findIndex(item => item.id === action.payload.id);
            state.selectedItems[indexI].quantity++;
            return {
                ...state
            }
        case 'DECREASE' :
            const indexD = state.selectedItems.findIndex(item => item.id === action.payload.id);
            state.selectedItems[indexD].quantity--;
            return {
                ...state
            }
        case 'CHECK_OUT' :
            return {
                selectedItems: [],
                itemsCounter: 0,
                totalPrice: 0,
                checkout: true
            }
        case 'CLEAR' :
            return {
                selectedItems: [],
                itemsCounter: 0,
                totalPrice: 0,
                checkout: false
            }
    }
}

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [state , dispatch] = useReducer(cartReducer , initialState);

    return (
        <CartContext.Provider value={{state , dispatch}}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;