import { NavLink, useNavigate } from 'react-router-dom';
import useAuth from '@hooks/useAuth';
import styles from './RegisterForm.module.scss';
import { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import LoaderComponent from '@components/Loader/LoaderComponent';

function useRegister() {
    const { register } = useAuth();
    const queryClient = useQueryClient();
    const navigate = useNavigate();

    const registerMutation = useMutation({
        mutationFn: async(data) => {
            return toast.promise(register({...data}), {
                loading: 'Реєстрація...',
                success: 'Успішна реєстрація!',
                error: (err) => err.response.data.error || 'Server error!'
            });
        },
        onSuccess: async () => {
            await queryClient.refetchQueries({ queryKey: ['me'] });
            navigate('/profile', {
                replace: true
            });
        },
    });

    return {
        processRegister: registerMutation.mutateAsync,
        isInProcess: registerMutation.isPending
    };
}

const RegisterForm = () => {
    const {processRegister, isInProcess} = useRegister();

    const [userForm, setUserForm] = useState({
        name: '',
        email : '',
        password: '',
        phone: '',
        address: ''
    });

    const onSubmit = (e) => {
        e.preventDefault();

        const startRegisterProcess = async() => {
            await processRegister({
                ...userForm
            });
        };
        startRegisterProcess();
    };

    return (
        <form className={styles.form} onSubmit={onSubmit}>
            <div className={styles.inputGroup}>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" required 
                    value={userForm.name} 
                    onChange={e => setUserForm({
                        ...userForm,
                        name: e.target.value
                    })} 
                />
            </div>

            <div className={styles.inputGroup}>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" required 
                    value={userForm.email} 
                    onChange={e => setUserForm({
                        ...userForm,
                        email: e.target.value
                    })}  
                />
            </div>

            <div className={styles.inputGroup}>
                <label htmlFor="phone">Phone</label>
                <input type="phone" name="phone" id="phone" required 
                    value={userForm.phone} 
                    onChange={e => setUserForm({
                        ...userForm,
                        phone: e.target.value
                    })} 
                />
            </div>

            <div className={styles.inputGroup}>
                <label htmlFor="address">Address</label>
                <input type="text" name="address" id="address" required 
                    value={userForm.address} 
                    onChange={e => setUserForm({
                        ...userForm,
                        address: e.target.value
                    })} 
                />
            </div>

            <div className={styles.inputGroup}>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" required 
                    value={userForm.password} 
                    onChange={e => setUserForm({
                        ...userForm,
                        password: e.target.value
                    })}  
                />
            </div>

            <button className={styles.btnLogin} type='submit' disabled = {isInProcess}>
                { isInProcess && <LoaderComponent size={15} /> }
                Зареєструватись
            </button>
            <NavLink className={styles.loginLink} to = '/login'>Увійти</NavLink>
        </form>
    );
}

export default RegisterForm;