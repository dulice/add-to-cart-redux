import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: { 
        items: [],
        totalQuantity: 0,
        showCart: false,
        changed: false,
    },
    reducers : {
        addToCart(state, action) {
            state.changed = true;
            const existingItem = state.items.find(item => item.id === action.payload.id);
            if(existingItem) {
                existingItem.quantity++;
                existingItem.totalPrice += action.payload.price;
            } else {
                state.items.push({
                    id: action.payload.id,
                    name: action.payload.name,
                    price: action.payload.price,
                    totalPrice: action.payload.price,
                    quantity: 1,
                })
                state.totalQuantity++;
            }
        },
        removeFromCart(state, action) {
            state.changed = true;
            const id = action.payload
            const existingItem = state.items.find(item => item.id === id);
            if(existingItem.quantity === 1) {
                state.items = state.items.filter(item => item.id !== id);
                state.totalQuantity--;
            }else {
                existingItem.quantity--;
                existingItem.totalPrice -= existingItem.price;
            }
        },
        setShowCard(state) {
            state.showCart = !state.showCart;
        },
    }
});

export const cartActions = cartSlice.actions;
export default cartSlice;