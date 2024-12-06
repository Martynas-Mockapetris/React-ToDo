import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useAuthContext } from './frontend/hooks/useAuthContext';
import Navbar from './frontend/components/Navbar';
import Login from './frontend/pages/Login';
import Signup from './frontend/pages/Signup';
import TodoList from './frontend/pages/TodoList';
import { useEffect } from 'react';

function App() {
  const { user } = useAuthContext();

  useEffect(() => {
    const root = document.documentElement;
    const bubbles = Array.from({ length: 25 }, () => ({
      y: Math.random() * 100,
      size: Math.random() * 80 + 10
    }));

    root.style.setProperty('--bubbles', bubbles.map((b) => `radial-gradient(circle at ${b.x}% ${b.y}%, rgba(255, 255, 255, 0.1) ${b.size}px, transparent ${b.size}px)`).join(','));
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <div className="app">

      </div>
    </BrowserRouter>
  );
}

export default App;
