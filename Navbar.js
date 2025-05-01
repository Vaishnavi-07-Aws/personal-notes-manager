import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav>
      <Link to="/">Dashboard</Link>
      <Link to="/create">New Note</Link>
      <button onClick={() => { localStorage.removeItem('token'); window.location.href = '/login'; }}>Logout</button>
    </nav>
  );
}