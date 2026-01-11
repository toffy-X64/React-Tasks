import { NavLink, useNavigate } from 'react-router-dom';
import styles from './LoginForm.module.scss';
import useAuth from '@hooks/useAuth';
import { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import LoaderComponent from '@components/Loader/LoaderComponent';

function useLogin() {
    const { login } = useAuth();
    const queryClient = useQueryClient();
    const navigate = useNavigate();

    const loginMutation = useMutation({
        mutationFn: async ({email, password}) => {
            return toast.promise(login(email, password), {
                loading: 'Авторизація...',
                success: 'Успішна авторизація!',
                error: (err) => err.response.data.error || 'Invalid credentials!'
            });
        },
        onSuccess: async() => {
            await queryClient.refetchQueries({ queryKey: ['me'] });
            
            navigate('/profile', {
                replace: true
            });
        },
    });

    return {
        processLogin: loginMutation.mutateAsync,
        isLoggingIn: loginMutation.isPending
    }
}

const LoginForm = () => {
    const {processLogin, isLoggingIn} = useLogin();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();

        const startLoginProcess = async() => {
            await processLogin({email, password});
        };
        startLoginProcess();
    };

    return (
        <form className={styles.form} onSubmit={onSubmit}>
            <div className={styles.inputGroup}>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" required value = {email} onChange={e => setEmail(e.target.value)} />
            </div>

            <div className={styles.inputGroup}>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" required value = {password} onChange={e => setPassword(e.target.value)} />
            </div>

            <button className={styles.btnLogin} type='submit'>
                {isLoggingIn && <LoaderComponent size={15} />}
                Увійти
            </button>
            <NavLink className={styles.registerLink} to = '/register'>Зареєструватись</NavLink>
        </form>
    );
}

export default LoginForm;