import { createSlice } from "@reduxjs/toolkit";
import { addItemAsync, clearCartAsync, fetchCart, formatCartAsync, syncCartAsync, updateItemAsync } from "./cartThunks";

const applyItems = (state, items) => {
    state.items = items;
}

const cartSlice = createSlice({
    name: 'cart',

    initialState: {
        total: 0,
        isOpen: false,
        items: [] // backend / localstorage
    },

    reducers: {
        addToCart: (state, action) => {
            const product = action.payload;
        

            const existing = state.items.find(i => i.product.id === product.id);
            if (existing) {
                existing.quantity += 1;
            } else {
                state.items.push({ product, quantity: 1 });
            }
        },

        decrementItemInCart: (state, action) => {
            const id = action.payload;

            const existing = state.items.find(i => i.product.id === id);
            if (!existing)
                return;

            if (existing.quantity > 1) {
                existing.quantity -= 1;
            } else {
                state.items = state.items.filter(i => i.product.id !== id);
            }
        },

        removeItemFromCart: (state, action) => {
            const id = action.payload;

            const existing = state.items.find(i => i.product.id === id);
            if (!existing)
                return;

            state.items = state.items.filter(i => i.product.id !== id);
        },

        resetCart: (state, action) => {
            state.items = [];
        },

        loadCartItems: (state, action) => {
            applyItems(state, action.payload);
        },

        openCart: (state, action) => {
            state.isOpen = true;
        },

        closeCart: (state, action) => {
            state.isOpen = false;
        }
    },

    extraReducers: (builder) => {
        builder.addCase(fetchCart.fulfilled, (state, action) => {
            applyItems(state, action.payload);
        });

        builder.addCase(addItemAsync.fulfilled, (state, action) => {
            applyItems(state, action.payload);
        })

        builder.addCase(updateItemAsync.fulfilled, (state, action) => {
            applyItems(state, action.payload);
        })

        builder.addCase(clearCartAsync.fulfilled, (state, action) => {
            applyItems(state, action.payload);
        });

        builder.addCase(formatCartAsync.fulfilled, (state, action) => {
            applyItems(state, action.payload);
        })

        builder.addCase(syncCartAsync.fulfilled, (state, action) => {
            applyItems(state, action.payload);
            localStorage.removeItem('cart-items');
        })
    }
});

export const { addToCart, decrementItemInCart, removeItemFromCart, resetCart, loadCartItems, openCart, closeCart } = cartSlice.actions;

export default cartSlice.reducer;