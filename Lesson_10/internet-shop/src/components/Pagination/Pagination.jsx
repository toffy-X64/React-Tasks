import styles from './Pagination.module.scss';

const Pagination = ({ page, setPage, totalPages }) => {
    if (totalPages <= 1) return null;

    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
    console.log(totalPages);
    

    return (
        <div className={styles.pagination}>
            <button
                className={styles.navBtn}
                disabled={page === 1}
                onClick={() => setPage(page - 1)}
            >
                ←
            </button>

            {pages.map(p => (
                <button
                    key={p}
                    className={`${styles.pageBtn} ${page === p ? styles.active : ''}`}
                    onClick={() => setPage(p)}
                >
                    {p}
                </button>
            ))}

            <button
                className={styles.navBtn}
                disabled={page === totalPages}
                onClick={() => setPage(page + 1)}
            >
                →
            </button>
        </div>
    );
};

export default Pagination;