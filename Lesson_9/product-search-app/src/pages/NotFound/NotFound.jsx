import styles from './NotFound.module.scss';

import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <main>
            <div className="container">
                <h1>404 - Page not found</h1>
                <Link to = '/'>Back to home page</Link>
            </div>
        </main>
    );
}

export default NotFound;