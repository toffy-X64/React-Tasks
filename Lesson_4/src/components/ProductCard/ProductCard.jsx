import './ProductCard.css';

function ProductCard({product, onAddedToCart}) {
    return (
        <div className='product-card'>
            <h3 className="product-title">{product.title}</h3>
            <p className="product-category">{product.category}</p>
            <p className="product-description">{product.description}</p>
            <p className="product-price">{product.price}</p>

            <button className='add-to-cart-btn' onClick={e => onAddedToCart(product)}>Add to cart</button>
        </div>
    );
}

export default ProductCard;