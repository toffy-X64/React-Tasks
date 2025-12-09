import { useState } from 'react';
import Container from './components/Container.jsx';
import ProductForm from './components/ProductForm/ProductForm';
import ProductCard from './components/ProductCard/ProductCard.jsx';

import { initialProducts, initialCategories, defaultCategory } from './mocks/productsData.js';
import ProductList from './components/ProductList/ProductList.jsx';
import ProductFilter from './components/ProductFilter/ProductFilter.jsx';

function App() {
    const [products, setProducts] = useState({
        current: [...initialProducts],
        all: [...initialProducts]
    });
    const [selectedCategory, setSelectedCategory] = useState(defaultCategory);  

    const handleOnAddProduct = (product) => {
        const updatedAll = [...products.all, product];

        const updatedCurrent = product.category === selectedCategory || selectedCategory === "all"
            ? [...products.current, product]
            : products.current;

        setProducts({
            all: updatedAll,
            current: updatedCurrent
        });
    };


    const handleOnChangeCategory = (category) => {
        setSelectedCategory(category);

        const filteredArr = products.all.filter(e => {
            return e.category === category || category === 'all';
        });

        setProducts({
            ...products,
            current: [...filteredArr]
        });
    };

    return (
        <div className="app">
            <Container>
                <ProductForm categories={initialCategories} onAddProduct={handleOnAddProduct} />
                <ProductFilter categories={initialCategories} selectedCategory={selectedCategory} onChangeCategory={handleOnChangeCategory} />
                <ProductList products={products.current} />
            </Container>
        </div>
    );
}

export default App;