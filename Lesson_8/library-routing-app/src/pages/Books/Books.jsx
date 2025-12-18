import { Outlet } from 'react-router-dom';
import styles from './Books.module.scss';

const Books = () => {
    return (
        <main>
            <div className="container">
                <Outlet />
            </div>
        </main>
    );
}

export default Books
