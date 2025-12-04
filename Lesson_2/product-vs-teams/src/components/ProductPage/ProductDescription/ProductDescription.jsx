import './ProductDescription.css';

function ProductDescription({children}) {
    return (
        <div className='product-description'>
            {children}
        </div>
    );
}

export default ProductDescription;