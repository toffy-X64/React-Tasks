import { useRef, useState } from 'react';
import styles from './TodoForm.module.scss';

const TodoForm = ({onAdd}) => {
    const [taskText, setTaskText] = useState('');

    

    const handleOnSubmit = (e) => {
        e.preventDefault();

        if (!taskText || taskText.trim() === '' || taskText.length < 3) {
            alert('Завдання повинно бути 3+ символи!');
            return;
        }

        onAdd(taskText);
        setTaskText('');
    };

    return (
        <form className={styles.form} onSubmit={handleOnSubmit}>
            <input type="text" placeholder='Додати нове завдання' required value={taskText} onChange={e => setTaskText(e.target.value)} />
            <button type='submit' className={styles['add-btn']} >Додати</button>
        </form>
    );
}

export default TodoForm;