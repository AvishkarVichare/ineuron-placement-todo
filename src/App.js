import React, { useReducer, useState } from 'react';
import todoReducer from './reducer';

const App = () => {
  const [todos, dispatch] = useReducer(todoReducer, []);
  const [todoText, setTodoText] = useState('');

  const handleAddTodo = () => {
    if (todoText.trim()) {
      dispatch({ type: 'ADD_TODO', payload: todoText });
      setTodoText('');
    }
  };

  const handleToggleTodo = id => {
    dispatch({ type: 'TOGGLE_TODO', payload: id });
  };

  const handleDeleteTodo = id => {
    dispatch({ type: 'DELETE_TODO', payload: id });
  };

  return (
    <div>
      <h1>Todo App</h1>
      <input
        type="text"
        value={todoText}
        onChange={e => setTodoText(e.target.value)}
        placeholder="Enter a todo"
      />
      <button onClick={handleAddTodo}>Add</button>
      <ul>
        {todos.map(todo => (
          <li
            key={todo.id}
            style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
            onClick={() => handleToggleTodo(todo.id)}
          >
            {todo.text}
            <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
