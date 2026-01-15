import { useEffect, useReducer } from "react";

const actions = {
    ADD_ITEM: 'ADD_ITEM',
    REMOVE_ITEM: 'REMOVE_ITEM',
    OPEN: 'OPEN',
    CLOSE: 'CLOSE',
    LOAD: 'LOAD'
};

function cartReducer(state, action) {
    switch(action.type) {
        case actions.ADD_ITEM: {
            const { id } = action.payload;

            const existing = state.items.find(item => item.id == id);

            let items;
            if (existing) {
                items = state.items.map(item => {
                    if (item.id === id) {
                        return { 
                            ...item, 
                            quantity: item.quantity + 1 
                        }
                    }

                    return item;
                });
            } else {
                items = [ ...state.items, { id, quantity: 1 } ]
            }

            return {
                ...state,
                items
            }
        }
        case actions.REMOVE_ITEM: {
            const { id } = action.payload;

            const existing = state.items.find(item => item.id == id);

            let items;
            if (existing && existing.quantity > 1) {
                items = state.items.map(item => {
                    if (item.id == id) {
                        return {
                            ...item,
                            quantity: item.quantity - 1
                        }
                    }

                    return item;
                });
            }
            else {
                items = state.items.filter(i => i.id != id);
            }

            return {
                ...state,
                items
            }
        }
        case actions.OPEN:
            return {
                ...state,
                active: true
            };
        case actions.CLOSE:
            return {
                ...state,
                active: false
            };
        case actions.LOAD: {
            const { items } = action.payload;

            return {
                ...state,
                items: [...items]
            }
        }
        default:
            return state;
    }
};

export const initialState = {
    active: false,
    items: [],
    meta: {
        total: 0,
        cost: 0
    }
};

export function useCartStore() {
    const [state, dispatch] = useReducer(cartReducer, initialState);

    useEffect(() => {
        document.body.classList.toggle('locked', state.active);
    }, [state.active]);

    return {
        cart: state,
        dispatchCart: dispatch,
        actions
    };
};