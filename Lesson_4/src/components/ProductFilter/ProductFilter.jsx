import './ProductFilter.css';

function ProductFilter({categories, selectedCategory, onChangeCategory}) {
    const formatedCategories = [...categories, 'all'];

    return (
        <div className='product-filter'>
            <select value={selectedCategory} onChange={e => onChangeCategory(e.target.value)}>
                {formatedCategories.map((e, index) => (
                    <option value={e} key={index}>{e}</option>
                ))}
            </select>
        </div>
    );
}

export default ProductFilter;