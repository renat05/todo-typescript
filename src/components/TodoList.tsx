import {TodoItem} from './TodoItem'
import { iTodo } from '../types/data'

interface ITodoProps {
    items: iTodo[];
    toggleTodo: (id:number) => void;
    removeTodo: (id:number) => void;
}
const TodoList:React.FC<ITodoProps> = (props) => {
    const {items, toggleTodo, removeTodo} = props;
    return (
        <div>
            {
                items.map((todo) => 
                <TodoItem 
                toggleTodo={toggleTodo}
                removeTodo={removeTodo}
                key={todo.id} 
                {...todo}
                />
                )
            }
        </div>
    )
}
export {TodoList}