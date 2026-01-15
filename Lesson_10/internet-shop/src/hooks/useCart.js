import { useDispatch, useSelector } from "react-redux";

import useAuth from '@hooks/useAuth';
import { addToCart, openCart, closeCart, decrementItemInCart, resetCart } from "@store/cart/cartSlice";
import { addItemAsync, updateItemAsync, clearCartAsync } from "@store/cart/cartThunks";

const syncWithLocal = (cartItems) => {
    let items = cartItems.map(e => {
        return {
            id: e.product.id, 
            quantity: e.quantity
        }
    });
    localStorage.setItem('cart-items', JSON.stringify(items));
};

function useCart() {
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);
    const isOpen = cart.isOpen;

    const { isAuthenticated } = useAuth();

    const open = () => dispatch( openCart() );
    const close = () => dispatch( closeCart() );

    const add = (product) => {
        dispatch( addToCart(product) );

        if (isAuthenticated) {
            dispatch( addItemAsync(product.id) );
        }
    };

    const decrement = (id, quantity) => {
        dispatch( decrementItemInCart(id) )

        if (isAuthenticated) {
            dispatch( updateItemAsync({id, quantity: quantity - 1}) );
        }
    };

    const clear = () => {
        dispatch( resetCart() );

        if (isAuthenticated) {
            dispatch( clearCartAsync() );
        }
    };

    return {
        items: cart.items,
        isOpen,
        add,
        decrement,
        clear,
        open,
        close
    }
}

export default useCart;