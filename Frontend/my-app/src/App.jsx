// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages
import Home from './pages/Home';
import CrimeList from './pages/CrimeList';
import ReportCrime from './pages/ReportCrime';
import Register from './pages/Register';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import AlertSettings from './pages/AlertSettings';

// Components
import Navbar from './components/Navbar';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/crimes" element={<CrimeList />} />
            <Route path="/report" element={<ReportCrime />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/alerts" element={<AlertSettings />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
