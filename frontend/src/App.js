import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import TasksPage from './pages/TasksPage';
import AboutPage from './pages/AboutPage';
import './App.css';

function Navbar() {
  const location = useLocation();
  return (
    <nav className="navbar">
      <div className="nav-brand">📚 Student App</div>
      <div className="nav-links">
        <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Công việc</Link>
        <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>Thông tin</Link>
      </div>
    </nav>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<TasksPage />} />
          <Route path="/about" element={<AboutPage />} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
