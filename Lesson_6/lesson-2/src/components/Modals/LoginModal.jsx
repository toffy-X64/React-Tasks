import { useState } from 'react';
import styles from './Modal.module.scss';

function LoginModal({onClose, onContinue}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const error = onContinue(email, password);
        if (error)
            setError(error);
        else
            setError('');
    };

    return (
        <div className={styles.overlay}>
            <div className={styles.modal} onSubmit={handleSubmit}>
                <button className={styles.closeBtn} onClick={onClose}>&times;</button>

                <h2>Login</h2>
                <form>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id='email' placeholder='email' value={email} onChange={e => setEmail(e.target.value)} required />

                    <label htmlFor="password">Password:</label>
                    <input type="password" id='password' placeholder='password' value={password} onChange={e => setPassword(e.target.value)} required />

                    <button className={styles.btnLogin} type='submit'>Login</button>

                    { error && <p className={styles.error}>{error}</p> }
                </form>
            </div>
        </div>
    );
}

export default LoginModal;