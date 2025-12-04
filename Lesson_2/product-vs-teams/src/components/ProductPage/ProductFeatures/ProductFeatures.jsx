import ProductFeature from '../ProductFeature/ProductFeature';
import './ProductFeatures.css';

function ProductFeatures({features}) {
    return (
        <div className='product-features'>
            <h4>Product-features</h4>
            {features.map( ({id, title, description}) => (
                <ProductFeature
                    key = {id}
                    title = {title}
                    description = {description}
                />
            ))}
        </div>
    );
}

export default ProductFeatures;