import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";

import useAuth from '@hooks/useAuth';
import useCart from "@hooks/useCart";

import { fetchCart, formatCartAsync, syncCartAsync } from "@store/cart/cartThunks";
import { resetCart } from "@store/cart/cartSlice";

const syncWithLocal = (cartItems) => {
    let items = cartItems.map(e => {
        return {
            id: e.product.id, 
            quantity: e.quantity
        }
    });
    localStorage.setItem('cart-items', JSON.stringify(items || '[]'));
};

const CartSync = () => {
    const { isAuthenticated } = useAuth();
    const dispatch = useDispatch();

    const didHybrated = useRef(false);

    const { isOpen, items } = useCart();

    useEffect(() => {
        if (isAuthenticated) {
            let items = null;
            const saved = localStorage.getItem('cart-items');
            if (saved && saved != 'undefined') {
                items = JSON.parse(saved);
            }

            if (items) {
                dispatch( syncCartAsync(items) );
            } else {
                dispatch( fetchCart() );
            }
        }

        if (!isAuthenticated) {
            const saved = localStorage.getItem('cart-items');
            if (saved && saved != 'undefined') {
                dispatch( formatCartAsync( JSON.parse(saved) ) );
            } else {
                dispatch( resetCart() );
            }
            didHybrated.current = true;
        }
    }, [isAuthenticated]);

    useEffect(() => {
        if (!isAuthenticated) {
            if (didHybrated.current) {
                didHybrated.current = false;
                return;
            }

            syncWithLocal(items);
        }
    }, [items])

    useEffect(() => {
        document.body.classList.toggle('locked', isOpen);

        return () => {
            document.body.classList.remove('locked');
        }
    }, [isOpen]);

    return null;
}

export default CartSync;