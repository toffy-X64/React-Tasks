import styles from './Register.module.scss';

import RegisterForm from '../../components/RegisterForm/RegisterForm';
import useAuth from '../../hooks/useAuth';
import Loader from '../../components/Loader/Loader';

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