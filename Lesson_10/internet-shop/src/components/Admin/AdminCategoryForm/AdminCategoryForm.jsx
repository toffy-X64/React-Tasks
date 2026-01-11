import styles from './AdminCategoryForm.module.scss';

const AdminCategoryForm = ({ title, form, setForm, onSubmit }) => {
    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setForm(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleOnSubmit = (e) => {
        e.preventDefault();
        onSubmit();
    };

    return (
        <form className={styles.form} onSubmit={handleOnSubmit}>
            <h2>{title}</h2>

            <div className={styles.field}>
                <label>Назва товару</label>
                <input name="name" value={form.name} onChange={handleOnChange} />
            </div>

            <div className={styles.field}>
                <label>Опис</label>
                <textarea name="description" value={form.description} onChange={handleOnChange} />
            </div>

            <button className={styles.saveBtn}>Зберегти</button>
        </form>
    );
}

export default AdminCategoryForm;