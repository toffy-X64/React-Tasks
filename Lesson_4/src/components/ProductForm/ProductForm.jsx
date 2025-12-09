import { useState } from 'react';
import './ProductForm.css';

function ProductForm({categories, onAddProduct}) {
    const [product, setProduct] = useState({
        title: '',
        price: 0,
        category: categories[0],
        description: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        onAddProduct({
            ...product,
            id: crypto.randomUUID()
        });

        setProduct({
            title: '',
            price: 0,
            category: categories[0],
            description: ''
        });
    };

    const handleOnChange = (e) => {
        setProduct({
            ...product,
            [e.target.name]: e.target.value
        })
    };

    return (
        <form className="product-form" onSubmit={handleSubmit}>
            <span>
                <input type="text" name='title' placeholder='title' value={product.title} onChange={handleOnChange} required />
            </span>
            <span>
                <input type="number" name='price' placeholder='price' value={product.price} onChange={handleOnChange} required />
            </span>
            <span>
                <select name="category" onChange={handleOnChange} value={product.category} required>
                    {categories?.map((cat, index) => (
                        <option key={index} value={cat}>{cat}</option>
                    ))}
                </select>
            </span>
            <span>
                <textarea 
                    name="description" 
                    placeholder='description' 
                    maxLength={300} 
                    minLength={10} 
                    onChange={handleOnChange} 
                    value={product.description}
                    required
                ></textarea>
            </span>

            <button type="submit">Add</button>
        </form>
    );
}

export default ProductForm;