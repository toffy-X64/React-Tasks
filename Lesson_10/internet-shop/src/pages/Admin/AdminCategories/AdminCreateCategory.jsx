import styles from './AdminCategories.module.scss';
import useAddCategory from "@hooks/categories/useAddCategory";
import { useState } from "react";

import AdminCategoryForm from '@components/Admin/AdminCategoryForm/AdminCategoryForm'

const AdminCreateCategory = () => {
    const addCategoryMutation = useAddCategory();

    const [form, setForm] = useState({
        name: '',
        description: ''
    });

    const onSubmit = () => {
        addCategoryMutation.mutateAsync({
            ...form
        });
    };

    return (
        <div className={styles.adminWrapper}>
            <AdminCategoryForm
                title = 'Додати нову категорію'
                form = {form}
                setForm = {setForm}
                onSubmit = {onSubmit}
            />
        </div>
    );
}

export default AdminCreateCategory;