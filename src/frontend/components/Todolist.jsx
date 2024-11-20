import { useState, useEffect } from 'react';
import { useAuthContext } from '../hooks/useAuthContext';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  const { user } = useAuthContext();

  useEffect(() => {
    const root = document.documentElement;
    const bubbles = Array.from({ length: 25 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 80 + 10
    }));

    root.style.setProperty('--bubbles', bubbles.map((b) => `radial-gradient(circle at ${b.x}% ${b.y}%, rgba(255, 255, 255, 0.1) ${b.size}px, transparent ${b.size}px)`).join(','));
  }, []);

  const addTodo = (e) => {
    e.preventDefault();
    if (input.trim()) {
      setTodos([...todos, { id: Date.now(), text: input, completed: false }]);
      setInput('');
    }
  };

  const toggleTodo = (id) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="todo-container">
      <h1>Todo List</h1>
      <form onSubmit={addTodo} className="todo-form">
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Add a new task..." className="todo-input" />
        <button type="submit" className="add-button">
          Add
        </button>
      </form>

      <div className="todo-list">
        {todos.map((todo) => (
          <div key={todo.id} className="todo-item">
            <input type="checkbox" checked={todo.completed} onChange={() => toggleTodo(todo.id)} />
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>{todo.text}</span>
            <button onClick={() => deleteTodo(todo.id)} className="delete-button">
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TodoList;
