import { useParams } from 'react-router-dom';
import styles from './AdminCategories.module.scss';

import useCategory from '@hooks/categories/useCategory';
import { useEffect, useState } from 'react';

import LoaderComponent from '@components/Loader/LoaderComponent';
import AdminCategoryForm from '@components/Admin/AdminCategoryForm/AdminCategoryForm';

import useEditCategory from '@hooks/categories/useEditCategory';

const AdminEditCategory = () => {
    const { id } = useParams();
    const { data, loading, error } = useCategory(id);

    const editCategoryMutation = useEditCategory();

    const [form, setForm] = useState({
        name: '',
        description: ''
    });
    
    const onSubmit = () => {
        editCategoryMutation.mutateAsync({
            ...form
        });
    };

    useEffect( () => {
        if (data) {
            setForm({
                name: data.name,
                description: data.description,
                id: data._id
            });
        }
    }, [data] );
    
    if (loading) return <LoaderComponent />
    if (error) return <Navigate to="/not-found" replace />;

    return (
        <div className={styles.adminWrapper}>
            <AdminCategoryForm
                title = 'Редагувати категорію'
                form = {form}
                setForm = {setForm}
                onSubmit = {onSubmit}
            />
        </div>
    );
}

export default AdminEditCategory;