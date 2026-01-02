import { useEffect, useState } from 'react';
import { Navigate, NavLink, useParams } from 'react-router-dom';
import styles from './AdminEdit.module.scss';
import useProduct from '../../../hooks/products/useProduct';
import useCategories from '../../../hooks/categories/useCategories';
import useEditProduct from '../../../hooks/products/useEditProduct';
import AdminProductForm from '../../../components/Admin/AdminProductForm/AdminProductForm';

const AdminEdit = () => {
    const { id } = useParams();
    const { data, loading, error } = useProduct(id);
    const { categories, loading: isLoading, error: isError } = useCategories();
    const editProductMutation = useEditProduct();

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

    useEffect(() => {
        if (data) {
            setForm({
                name: data.name,
                description: data.description,
                price: data.price,
                discount: data.discount,
                stock: data.stock,
                image: data.image,
                categoryId: data.category._id,
                id: id
            });
        }
    }, [data]);

    
    const onSubmit = () => {
        editProductMutation.mutateAsync(
            {
                ...form,
                category: form.categoryId,
            }
        );
    };

    if (loading || isLoading) return <p>Loading...</p>;
    if (error || isError) return <Navigate to="/not-found" replace />;

    return (
        <div className={styles.adminWrapper}>
            <AdminProductForm 
                title = 'Редагування товару'
                form = {form}
                setForm = {setForm}
                categories = {categories}
                onSubmit = {onSubmit}
            />
        </div>
    );
};

export default AdminEdit;