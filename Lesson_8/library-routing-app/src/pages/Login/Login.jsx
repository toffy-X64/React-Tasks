import { useState } from 'react';
import styles from './Login.module.scss';

const Login = ({setCurrentUser, onLogin}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleOnLogin = (e) => {
        e.preventDefault();

        const result = onLogin(email, password);
        if (!result.success) {
            setError(result.error);
            return;
        }

        setEmail('');
        setPassword('');
        setError('');
        
        setCurrentUser(result.data);
    };

    return (
        <main>
            <div className="container">
                <div className={styles.wrapper}>
                    <h1 className={styles.title}>Вхід до системи</h1>
                    <p className={styles.desc}>Увійдіть, щоб додавати книги</p>

                    <form className={styles.form} onSubmit={handleOnLogin}>
                        <span className={styles['form-control']}>
                            <label htmlFor='email'>Email</label>
                            <input type='email' placeholder='email' id = 'email' value={email} onChange={e => setEmail(e.target.value)} required />
                        </span>

                        <span className={styles['form-control']}>
                            <label htmlFor='password'>Пароль</label>
                            <input type='password' placeholder='Введіть пароль'  value={password} onChange={e => setPassword(e.target.value)} id = 'password' required />
                        </span>

                        {error && <p className={styles.error}>{error}</p>}

                        <button className={styles.btnLogin} type='submit'>Увійти</button>
                    </form>
                </div>
            </div>
        </main>
    );
}

export default Login;