import { useState } from 'react';
import styles from './Modal.module.scss';

function RegisterModal({onClose, onContinue}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');

    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (password !== repeatPassword) {
            setError('Passwords are not matching!');
            return;
        }

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

                <h2>Register</h2>
                <form>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id='email' placeholder='email' value={email} onChange={e => setEmail(e.target.value)} required />

                    <label htmlFor="password">Password:</label>
                    <input type="password" id='password' placeholder='password' value={password} onChange={e => setPassword(e.target.value)} required />

                    <label htmlFor="repeatPassword">Repeat password:</label>
                    <input type="password" id='repeatPassword' placeholder='repeat password' value={repeatPassword} onChange={e => setRepeatPassword(e.target.value)} required />

                    <button className={styles.btnLogin} type='submit'>Register</button>

                    { error && <p className={styles.error}>{error}</p> }
                </form>
            </div>
        </div>
    );
}

export default RegisterModal;