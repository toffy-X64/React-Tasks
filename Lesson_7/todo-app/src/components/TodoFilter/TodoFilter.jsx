import styles from './TodoFilter.module.scss';

const TodoFilter = ({showType, setShowType, sortBy, setSortBy}) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles['filter-section']}>
                <p>Показати:</p>
                <select value={showType} onChange={e => setShowType(e.target.value)}>
                    <option value="all">Всі</option>
                    <option value="active">Активні</option>
                    <option value="completed">Виконані</option>
                </select>
            </div>

            <div className={styles['filter-section']}>
                <p>Сортувати:</p>
                <select value={sortBy} onChange={e => setSortBy(e.target.value)}>
                    <option value="none">Не сортувати</option>
                    <option value="important-first">Важливі спочатку</option>
                    <option value="important-last">Неважилві спочатку</option>
                </select>
            </div>
        </div>
    );
}

export default TodoFilter;