import React, { useCallback, useEffect, useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import TodoList from './components/TodoList';
import { Todo } from './model';

const getInitialTodoState = () => {
  const savedTodos = localStorage.getItem('todosLS');
  return savedTodos ? JSON.parse(savedTodos) : [];
}

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>('');
  const [todos, setTodos] = useState<Todo[]>(getInitialTodoState);

  useEffect(() => {
    localStorage.setItem('todosLS', JSON.stringify(todos));
  }, [todos]);
  
  const handleAdd = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo('');
    }
  }, [todo, todos]);

  return (
    <div className='app'>
        <div className='header'>TODO LIST</div>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
