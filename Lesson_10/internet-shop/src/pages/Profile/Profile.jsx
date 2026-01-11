import styles from './Profile.module.scss';
import useAuth from '@hooks/useAuth';

const rolesDescription = {
    customer: 'Ви можете переглядати каталог та додавати товари в кошик',
    admin: 'Ви можете робити все'
};

const Profile = () => {
    const { user } = useAuth();

    return (
        <main className={styles.page}>
            <div className='container'>
                <div className={styles.header}>
                    <div className={styles.avatar}>
                        <span className="material-icons">Profile</span>
                    </div>
                    <h2>{user.fullName || 'Клієнт'}</h2>
                    <span className={styles.role}>{user.role}</span>
                </div>

                <div className={styles.section}>
                    <h3>Особиста інформація</h3>

                    <div className={styles.card}>
                        <span>Email</span>
                        <p>{user.email}</p>
                    </div>

                    <div className={styles.card}>
                        <span>Роль</span>
                        <p>{user.role}</p>
                    </div>

                    <div className={styles.card}>
                        <span>Ім’я</span>
                        <p>{user.fullName}</p>
                    </div>
                </div>

                <div className={styles.section}>
                    <h3>Доступ</h3>

                    <div className={styles.access}>
                        <strong>{user.role}</strong>
                        <p>{rolesDescription[user.role] || 'Not found('}</p>
                    </div>
                </div>

            </div>
        </main>
    );
};

export default Profile;
