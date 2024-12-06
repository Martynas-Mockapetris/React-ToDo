<<<<<<< HEAD
import { useState } from 'react';
import { useLogin } from '../hooks/useLogin';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, error, isLoading } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(email, password);
  };

  return (
    <div className="todo-container">
      <form className="todo-form" onSubmit={handleSubmit}>
        <h3>Login</h3>
        <div className="field">
          <label>Email:</label>
          <input type="email" className="todo-input" onChange={(e) => setEmail(e.target.value)} value={email} />
        </div>
        <div className="field">
          <label>Password:</label>
          <input type="password" className="todo-input" onChange={(e) => setPassword(e.target.value)} value={password} />
        </div>
        <button className="add-button" disabled={isLoading}>
          Login
        </button>
        {error && <div className="error">{error}</div>}
      </form>
    </div>
  );
};

export default Login;
=======
import { useState } from 'react';
import { useLogin } from '../hooks/useLogin';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, error, isLoading } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(email, password);
  };

  return (
    <div className="todo-container-log">
      <form className="todo-form" onSubmit={handleSubmit}>
        <h3>Login</h3>
        <label>Email:</label>
        <input type="email" className="todo-input" onChange={(e) => setEmail(e.target.value)} value={email} />
        <label>Password:</label>
        <input type="password" className="todo-input" onChange={(e) => setPassword(e.target.value)} value={password} />
        <button className="add-button" disabled={isLoading}>
          Login
        </button>
        {error && <div className="error">{error}</div>}
      </form>
    </div>
  );
};

export default Login;
>>>>>>> 548b19fd0cde63362fe5c272ae168f6681eaf6a8
