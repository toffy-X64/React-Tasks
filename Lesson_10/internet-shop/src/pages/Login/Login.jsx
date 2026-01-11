import styles from './Login.module.scss';

import useAuth from '@hooks/useAuth';

import Loader from '@components/Loader/Loader';
import LoginForm from '@components/LoginForm/LoginForm';

const Login = () => {
    const { loading } = useAuth();

    if (loading)
        return <Loader visible={loading} />

    return (
        <main className='page'>
            <div className="container">
                <LoginForm />
            </div>
        </main>
    );
}

export default Login;