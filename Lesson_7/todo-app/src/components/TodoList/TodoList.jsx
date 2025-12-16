import { useEffect, useState } from 'react';
import TodoCard from '../TodoCard/TodoCard';
import TodoForm from '../TodoForm/TodoForm';
import styles from './TodoList.module.scss';
import Modal from '../Modal/Modal';
import TodoFilter from '../TodoFilter/TodoFilter';

const importance = {
    low: 1,
    medium: 2,
    high: 3
};

const TodoList = ({todoItems, setTodoItems}) => {
    const [isDeleteModalActive, setIsDeleteModalActive] = useState(false);
    const [currentItemToDelete, setCurrentItemToDelete] = useState(null);
    const [showType, setShowType] = useState('all');
    const [sortBy, setSortBy] = useState('none');
    const [filteredItems, setFilteredItems] = useState([]);

    useEffect(() => {
        let items = [...todoItems];

        switch(showType) {
            case 'active':
                items = items.filter(item => !item.completed);
                break;
            case 'completed':
                items = items.filter(item => item.completed);
                break;
        }

        switch (sortBy) {
            case 'important-first':
                items.sort((a,b) => importance[b.priority] - importance[a.priority]);
                break;
            case 'important-last':
                items.sort((a,b) => importance[a.priority] - importance[b.priority]);
                break;
        }

        setFilteredItems(items);
    }, [sortBy, showType, todoItems]);

    const handleOnAdd = (text) => {
        setTodoItems([
            ...todoItems,
            {
                id: crypto.randomUUID(),
                text,
                priority: 'low',
                completed: false
            }
        ]);
    };

    const handleOnChange = (id, updated) => {
        const updatedItems = todoItems.map(item => {
            if (item.id === id) {                
                return {
                    ...item,
                    ...updated
                }
            }

            return item;
        });

        setTodoItems([...updatedItems]);
    };

    const handleOnDelete = (id) => {
        const foundItem = todoItems.find(task => task.id === id);
        if (!foundItem)
            return;

        setCurrentItemToDelete({
            ...foundItem
        });
        setIsDeleteModalActive(true);
    };

    const removeTask = (id) => {
        const filteredItems = todoItems.filter(item => {
            return item.id !== id;
        });
        setTodoItems([...filteredItems]);
    };

    return (
        <>

        {
            isDeleteModalActive && 
            <Modal 
                currentTask = {currentItemToDelete} 
                onClose = {() => {
                    setCurrentItemToDelete(null);
                    setIsDeleteModalActive(false);
                }} 
                onRemove = {removeTask} 
            />
        }

        <div className={styles['todo-list']}>
            <h1 className={styles.title}>Мої завдання</h1>
            <TodoForm onAdd={handleOnAdd} />
            <TodoFilter
                showType = {showType}
                setShowType = {setShowType}
                sortBy = {sortBy}
                setSortBy = {setSortBy}
            />

            <div className={styles.wrapper}>
                {filteredItems?.map(todo => (
                    <TodoCard
                        key = {todo.id}
                        id = {todo.id}
                        text = {todo.text}
                        completed = {todo.completed}
                        priority = {todo.priority}
                        onChange = {handleOnChange}
                        onDelete = {handleOnDelete}
                    />
                ))}
            </div>
        </div>

        </>
    );
}

export default TodoList;