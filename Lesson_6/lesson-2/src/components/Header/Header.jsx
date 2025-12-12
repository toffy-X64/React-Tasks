import styles from './Header.module.scss';

function Header({currentUser, onLoginModalOpen, onRegisterModalOpen, onLogout}) {
    return (
        <header className={styles.header}>
            <h1 className={styles.logo}>My App</h1>
            {!currentUser 
                ? 
                (
                    <div className={styles.actionContainer}>
                        <button className={styles.loginBtn} onClick={onLoginModalOpen}>Login</button>
                        <button className={styles.loginBtn} onClick={onRegisterModalOpen}>Register</button>
                    </div>
                ) 
                : 
                (
                    <div className={styles.userWrapper}>
                        <span className={styles.email}>{currentUser.email}</span>
                        <button 
                            className={styles.logoutBtn} 
                            onClick={onLogout}
                        >
                            Logout  
                        </button>
                    </div>
                )
            }
        </header>
    );
}

export default Header;