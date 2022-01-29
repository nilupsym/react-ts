import React from 'react';
import './styles.css';

type Props = {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {
    
    return <form className='input-field' onSubmit={handleAdd}>
        <input
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            className='input'
            type='input'
            placeholder='Enter a task'
        />
        <button
            className='button'
            type='submit'
        >
            {'Add'}
        </button>
  </form>;
};

export default InputField;
