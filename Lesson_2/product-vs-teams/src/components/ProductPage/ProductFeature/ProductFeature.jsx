import './ProductFeature.css';

function ProductFeature({title, description}) {
    return (
        <div className='product-feature'>
            <h4>{title}</h4>
            <span>
                {description}
            </span>
        </div>
    );
}

export default ProductFeature;