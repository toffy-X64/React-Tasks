import { createContext, useContext } from "react";
import { useCartStore } from "@stores/CartStore";
import Cart from "@components/Cart/Cart";
import CartSyncer from "@components/Cart/CartSyncer";

import useAuth from '@hooks/useAuth';
import useAddItemToCart from "@hooks/cart/useAddItemToCart";

export const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
    const { cart, dispatchCart, actions } = useCartStore();
    const { isAuthenticated } = useAuth();

    const addItemMutation = useAddItemToCart();

    const load = (items) => {
        dispatchCart({
            type: actions.LOAD,
            payload: {
                items
            }
        });
    };

    const open = () => {
        dispatchCart({
            type: actions.OPEN
        })
    };

    const close = () => {
        dispatchCart({
            type: actions.CLOSE
        })
    };

    const addItem = (id) => {
        if (isAuthenticated) {
            addItemMutation.mutateAsync({id, quantity: 1});
        }

        dispatchCart({
            type: actions.ADD_ITEM,
            payload: {
                id
            }
        });
    };

    const removeItem = (id) => {
        dispatchCart({
            type: actions.REMOVE_ITEM,
            payload: {
                id
            }
        });
    };

    const isEmpty = () => {
        return cart.items.length <= 0;
    };

    const getItemsCountById = (id) => {
        const item = cart.items.find(i => i.product.id == id);
        return item ? item.quantity : 0;
    };

    const value = {
        open,
        close,
        cart,
        addItem,
        removeItem,
        isEmpty,
        getItemsCountById,
        load
    };

    return (
        <CartContext.Provider value = {value}>
            <Cart />
            {children}
            <CartSyncer />
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const ctx = useContext(CartContext);
    if (!ctx)
        throw new Error('useCart must be used inside CartProvider');
    return ctx;
};