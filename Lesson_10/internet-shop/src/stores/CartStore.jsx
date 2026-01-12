import { useReducer } from "react";

const actions = {
    ADD_ITEM: 1,
    REMOVE_ITEM: 2,
    OPEN: 3,
    CLOSE: 4
};

function cartReducer(state, action) {
    switch(action.type) {
        case actions.ADD_ITEM:
            break;
        case actions.REMOVE_ITEM:
            break;
        case actions.OPEN:
            document.body.classList.add('locked');
            return {
                ...state,
                active: true
            };
        case actions.CLOSE:
            document.body.classList.remove('locked');
            return {
                ...state,
                active: false
            };
        default:
            return state;
    }
};

export function useCartStore() {
    const [state, dispatch] = useReducer(cartReducer, {
        active: false,
        items: [],
        meta: {
            total: 0,
            cost: 0
        }
    });

    return {
        cart: state,
        dispatchCart: dispatch,
        actions
    };
};