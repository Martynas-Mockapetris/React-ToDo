import { useState, useEffect } from 'react';
import { useAuthContext } from '../hooks/useAuthContext';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  const { user } = useAuthContext();

  useEffect(() => {
    const fetchTodos = async () => {
      // console.log('User token:', user?.token);
      const response = await fetch('/api/todos', {
        headers: {
          Authorization: `Bearer ${user.token}`
        }
      });
      const json = await response.json();
      if (response.ok) {
        setTodos(json);
      }
    };

    if (user) {
      fetchTodos();
    }
  }, [user]);

  const addTodo = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${user.token}`
      },
      body: JSON.stringify({ text: input })
    });
    const json = await response.json();
    if (response.ok) {
      setTodos([...todos, json]);
      setInput('');
    }
  };

  const toggleTodo = async (id) => {
    const response = await fetch(`/api/todos/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${user.token}`
      },
      body: JSON.stringify({ completed: !todos.find((todo) => todo._id === id).completed })
    });

    const json = await response.json();

    if (response.ok) {
      setTodos(todos.map((todo) => (todo._id === id ? { ...todo, completed: !todo.completed } : todo)));
    }
  };

  const deleteTodo = async (id) => {
    const response = await fetch(`/api/todos/${id}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    });
    if (response.ok) {
      setTodos(todos.filter((todo) => todo._id !== id));
    }
  };

  return (
    <div className="todo-container">
      <h1>Todo List</h1>
      <form onSubmit={addTodo} className="todo-form-list">
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Add a new task..." className="todo-input" />
        <button type="submit" className="add-button">
          Add
        </button>
      </form>

      <div className="todo-list">
        {todos.map((todo) => (
          <div key={todo._id} className="todo-item">
            <input type="checkbox" checked={todo.completed} onChange={() => toggleTodo(todo._id)} />
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>{todo.text}</span>
            <button onClick={() => deleteTodo(todo._id)} className="delete-button">
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TodoList;
