import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useAuthContext } from './frontend/hooks/useAuthContext';
import Navbar from './frontend/components/Navbar';
import Login from './frontend/pages/Login';
import Signup from './frontend/pages/Signup';
import TodoList from './frontend/components/TodoList';

function App() {
  const { user } = useAuthContext();

  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
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
