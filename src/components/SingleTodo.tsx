import React, { useCallback, useState } from 'react';
import { Todo } from '../model';
import { ImPencil, ImCheckmark, ImCross } from 'react-icons/im';
import './styles.css';

type Props = {
    todo: Todo;
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo: React.FC<Props> = ({ todo, todos, setTodos }) => {
    const [edit, setEdit] = useState<boolean>(false);
    const [editTodo, seteditTodo] = useState<string>(todo.todo);

    const handleEdit = useCallback((e: React.FormEvent, id: number) => {
        e.preventDefault();
        setTodos(todos.map((todo) => todo.id === id ? { ...todo, todo: editTodo } : todo))
        setEdit(false)
    }, [editTodo, setTodos, todos]);

    const handleDelete = useCallback((id: number) => {
        setTodos(todos.filter((todo) => todo.id !== id))
    }, [setTodos, todos]);

    const handleDone = useCallback((id: number) => {
        setTodos(todos.map((todo) => todo.id === id ? { ...todo, isDone: !todo.isDone } : todo))
    }, [setTodos, todos]);
    
    return <form className='todo' onSubmit={(e) => handleEdit(e, todo.id)}>
        {edit ? (
            <input value={editTodo} onChange={(e) => seteditTodo(e.target.value)} />) : (todo.isDone ? <s>{todo.todo}</s> : <span>{todo.todo}</span>)}
        <div className='actions'>
            <span
                onClick={() => { if (!edit && !todo.isDone) { setEdit(!edit) } }}
            >
                <ImPencil />
            </span>
            <span
                className='action-delete'
                onClick={() => handleDelete(todo.id)}
            >
                <ImCross />
            </span>
            <span
                onClick={() => handleDone(todo.id)}
            >
                <ImCheckmark />
            </span>
        </div>
    </form>;
};

export default SingleTodo;
