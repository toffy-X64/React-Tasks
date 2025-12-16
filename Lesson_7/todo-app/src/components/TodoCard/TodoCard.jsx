import styles from './TodoCard.module.scss';
import clsx from 'clsx';

const priorityColors = {
    low: 'green',
    medium: '#f89838ff',
    high: 'red'
};

const TodoCard = ({id, text, completed, priority, onChange, onDelete}) => {
    const borderColor = priorityColors[priority] || 'red';

    return (
        <div className={styles.card} style={{
            borderLeft: `3px solid ${borderColor}`
        }}>
            <div className={styles['card-section']}>
                <input type="checkbox" checked = {completed} onChange={e => onChange(id, {completed: e.target.checked})} />
                <p className={
                    clsx(styles.text, {
                            [styles.crossed]: completed
                        })
                    }
                >{text}</p>
            </div>
            
            <div className={styles['card-section']}>
                <select value={priority} onChange={e => onChange(id, {priority: e.target.value})} disabled = {completed}>
                    <option value="high">Високий</option>
                    <option value="medium">Середній</option>
                    <option value="low">Низький</option>
                </select>

                <button type='button' className={styles['remove-btn']} onClick={e => onDelete(id)}>&times;</button>
            </div>
        </div>
    );
}

export default TodoCard;