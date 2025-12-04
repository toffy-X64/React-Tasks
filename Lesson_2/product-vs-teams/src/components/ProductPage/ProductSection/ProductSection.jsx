import './ProductSection.css';

import ProductHeader from '../ProductHeader/ProductHeader';
import ProductFooter from '../ProductFooter/ProductFooter';

import ProductDescription from '../ProductDescription/ProductDescription';
import ProductFeatures from '../ProductFeatures/ProductFeatures.JSX';

import { features } from '../../../mocks/dataArrays';

function ProductPage() {
    const productData = {
        name: 'Blockhain cloud wallet',
        description: 'Put your cryptocurrency on secure cloud crypto wallet.',
        author: 'ToffyX64 / @toffyX64'
    };

    return (
        <section className="product-section">
            
            <div className="container product__container">
                <div className="product-info">
                    <ProductHeader name={productData.name} />
                    <ProductDescription>
                        <span>
                            <p>{productData.description}</p>
                        </span>
                    </ProductDescription>
                </div>

                <ProductFeatures features = {features} />

                <ProductFooter author = {productData.author} />
            </div>
        </section>
    );
}

export default ProductPage;