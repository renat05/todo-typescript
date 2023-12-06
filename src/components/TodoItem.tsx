import { iTodo } from "../types/data"

interface iTodoItem extends iTodo {
    toggleTodo: (id:number) => void;
    removeTodo: (id:number) => void;
}

const TodoItem:React.FC<iTodoItem> = (props) => {

    const {id, title, complete,toggleTodo, removeTodo} = props
    return (
        <div>
            <input type="checkbox" checked={complete} onChange={() => toggleTodo(id)}/>
            {title}
            <button  style={{
                background: 'transparent',
                border: 'none',
                outline: 'none',
                color: 'red',
            }} onClick={() => removeTodo(id)}>X</button>
        </div>
    )
}
export {TodoItem}