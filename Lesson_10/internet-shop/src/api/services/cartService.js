import api from '@api/axios.config';

export const cartService = {
    get: async() => await api.get('/cart'),
    add: async(productId, quantity = 1) => await api.post('/cart/items', {
        productId,
        quantity: quantity
    }),
    updateItem: async(productId, quantity) => {
        return await api.patch(`/cart/items/${productId}`, {
            quantity: quantity
        });
    },
    clear: async() => await api.delete('/cart'),
    format: async(items) => await api.post('/cart/format', {
        items: items
    }),
    sync: async(items = []) => await api.post('/cart/sync', {
        items: items
    })
};