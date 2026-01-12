import { createContext, useContext } from "react";
import { useCartStore } from "@stores/CartStore";
import Cart from "@components/Cart/Cart";

export const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
    const { active, cart, dispatchCart, actions } = useCartStore();

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

    const value = {
        open,
        close,
        cart
    };

    return (
        <CartContext.Provider value = {value}>
            <Cart />
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);