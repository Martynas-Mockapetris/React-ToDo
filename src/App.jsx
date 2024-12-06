import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useAuthContext } from './frontend/hooks/useAuthContext';
import Navbar from './frontend/components/Navbar';
import Login from './frontend/pages/Login';
import Signup from './frontend/pages/Signup';
<<<<<<< HEAD
import TodoList from './frontend/pages/TodoList';
import { useEffect } from 'react';
=======
import TodoList from './frontend/components/TodoList';
>>>>>>> 548b19fd0cde63362fe5c272ae168f6681eaf6a8

function App() {
  const { user } = useAuthContext();

<<<<<<< HEAD
  useEffect(() => {
    const root = document.documentElement;
    const bubbles = Array.from({ length: 25 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 80 + 10
    }));

    root.style.setProperty('--bubbles', bubbles.map((b) => `radial-gradient(circle at ${b.x}% ${b.y}%, rgba(255, 255, 255, 0.1) ${b.size}px, transparent ${b.size}px)`).join(','));
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <div className="app">
=======
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
>>>>>>> 548b19fd0cde63362fe5c272ae168f6681eaf6a8
        <Routes>
          <Route path="/" element={user ? <TodoList /> : <Navigate to="/login" />} />
          <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
          <Route path="/signup" element={!user ? <Signup /> : <Navigate to="/" />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
