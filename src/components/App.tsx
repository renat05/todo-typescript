import { useState, useEffect, useRef } from "react"
import {iTodo} from '../types/data';
import {TodoList} from './TodoList'
import { ChangeEvent } from "react";
const App: React.FC = () => {
    let [value, setValue] = useState('')
    let [todos, setTodos] = useState<iTodo[]>([]);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }
    const keyDown:React.KeyboardEventHandler<HTMLInputElement> = (e) => {
        if(e.key === 'Enter')
        add();
    }
    const removeTodo = (id:number):void => {
        setTodos(todos.filter(todo => todo.id !== id))
    }
    const toggleTodo = (id:number):void => {
        setTodos(todos.map(todo => {
            if(todo.id !== id) return todo;
            return {
                ...todo,
                complete:!todo.complete
            }
          }))
    }
    const inputRef = useRef<HTMLInputElement>(null);
    const add = () => {
       if(value) {
        setTodos([
            ...todos, {
                id: Date.now(),
                title: value,
                complete: false
            }])
            setValue('')
       } else {
            alert('input required')
       }
    }

    useEffect (() => {
       if(inputRef.current) {
        inputRef.current.focus()
       }
    }, [])
    return (
        <div>
            <div>
                <input value={value} onChange={handleChange}ref={inputRef} onKeyDown={keyDown}/>
                <button onClick={add} >Add</button>
            </div>
            <TodoList items={todos} removeTodo={removeTodo} toggleTodo={toggleTodo}/>
        </div>

    )
}

export {App}