import './ProductList.css';

import { useState } from 'react';

import ProductCard from '../ProductCard/ProductCard';


function ProductList({products}) {
    const [cart, setCart] = useState([]);

    const handleOnAddedToCart = (item) => {
        setCart(prev => {
            const updated = [...prev, item];
            console.log(updated);
            return updated;
        });
    };

    return (
        <div className='product-list'>
            {products.map((e, index) => (
                <ProductCard key={e.id} product={e} onAddedToCart={handleOnAddedToCart} />
            ))}
        </div>
    );
}

export default ProductList;