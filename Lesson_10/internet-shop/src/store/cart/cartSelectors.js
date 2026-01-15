import { createSelector } from "@reduxjs/toolkit";

export const selectCartItems = (state) => state.cart.items;

export const selectCartTotal = createSelector(
    [selectCartItems],
    (items) => {
        return items.reduce( (sum, item) => sum + item.product.finalPrice * item.quantity, 0 )
    }
);