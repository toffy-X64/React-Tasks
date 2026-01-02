import { useEffect } from 'react';
import styles from './AdminProductForm.module.scss';

const AdminProductForm = ({title, form, setForm, categories, onSubmit}) => {
    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit();
    };

    useEffect(() => {
        setForm(prev => ({
            ...prev,
            categoryId: categories[0]
        }));
    }, [categories]);

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <h2>{title}</h2>
        
            <div className={styles.field}>
                <label>Назва товару</label>
                <input name="name" value={form.name} onChange={handleChange} />
            </div>
        
            <div className={styles.field}>
                <label>Категорія</label>
                <select className={styles.category} name='categoryId' value = {form.categoryId} onChange={handleChange}>
                    {categories?.map(c => (
                        <option key={c._id} value={c._id}>
                            {c.name}
                        </option>
                    ))}
                </select>
            </div>
        
            <div className={styles.field}>
                <label>Опис</label>
                <textarea name="description" value={form.description} onChange={handleChange} />
            </div>
        
            <div className={styles.row}>
                <div className={styles.field}>
                    <label>Ціна</label>
                    <input type="number" name="price" value={form.price} onChange={handleChange} />
                </div>
        
                <div className={styles.field}>
                    <label>Знижка (%)</label>
                    <input type="number" name="discount" value={form.discount} onChange={handleChange} />
                </div>
        
                <div className={styles.field}>
                    <label>Кількість</label>
                    <input type="number" name="stock" value={form.stock} onChange={handleChange} />
                </div>
            </div>
        
            <div className={styles.field}>
                <label>Зображення (URL)</label>
                <input name="image" value={form.image} onChange={handleChange} />
            </div>
        
            {form.image && (
                <div className={styles.preview}>
                    <p>Попередній перегляд:</p>
                    <img src={form.image} alt="preview" />
                </div>
            )}
        
            <button className={styles.saveBtn}>Зберегти</button>
        </form>
    );
}

export default AdminProductForm;