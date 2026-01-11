import { useState } from 'react';

import styles from './AdminCreate.module.scss';

import useCategories from '@hooks/categories/useCategories';
import useAddProduct from '@hooks/products/useAddProduct';

import AdminProductForm from '@components/Admin/AdminProductForm/AdminProductForm';

const AdminCreate = () => {
    const { categories, loading, error } = useCategories();
    const addProductMutation = useAddProduct();

    const [form, setForm] = useState({
        name: '',
        description: '',
        price: '',
        discount: '',
        stock: '',
        image: '',
        categoryId: '',
        id: ''
    });

    const onSubmit = () => {
        addProductMutation.mutateAsync({
            ...form,
            category: form.categoryId
        })
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <Navigate to="/not-found" replace />;

    return (
        <div className={styles.adminWrapper}>
            <AdminProductForm
                title = 'Додавання товару'
                form = {form}
                setForm = {setForm}
                categories={categories}
                onSubmit = {onSubmit}
            />
        </div>
    );
}

export default AdminCreate;