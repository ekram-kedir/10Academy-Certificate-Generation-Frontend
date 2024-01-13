import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route index element={<Navigate to="/login" />} />
        </Routes>
        <p>Don't have an account? <a href="/register">Go to registration</a></p>
      </div>
    </Router>
  );
};

export default App;
