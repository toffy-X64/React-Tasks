import TodoList from "./components/TodoList/TodoList.jsx";
import useLocalStorage from "./hooks/useLocalStorage";
import { initialTodos } from "./mocks/tasks.js";

const App = () => {
    const [todoItems, setTodoItems] = useLocalStorage('todo-items', initialTodos);

    return (
        <div className='app'>
            <div className="container">
                <TodoList 
                    todoItems = {todoItems} 
                    setTodoItems = {setTodoItems} 
                />
            </div>
        </div>
    );
}

export default App;