import styles from './Register.module.scss';

import useAuth from '@hooks/useAuth';

import Loader from '@components/Loader/Loader';
import RegisterForm from '@components/RegisterForm/RegisterForm';

const Register = () => {
    const {loading} = useAuth();

    if (loading)
        return <Loader visible={loading} />

    return (
        <main className="page">
            <div className="container">
                <RegisterForm />
            </div>
        </main>
    );
}

export default Register;