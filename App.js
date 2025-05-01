import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import EditNote from './pages/EditNote';

const isLoggedIn = !!localStorage.getItem('token');

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={isLoggedIn ? <Dashboard /> : <Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/edit/:id" element={isLoggedIn ? <EditNote /> : <Navigate to="/login" />} />
        <Route path="/create" element={isLoggedIn ? <EditNote /> : <Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
