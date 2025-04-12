import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import ReportList from './pages/ReportList';
import ReportChart from './pages/ReportChart';
import ReportForm from './pages/ReportForm';
import AdminPanel from './pages/AdminPanel';
import AlertSettings from './pages/AlertSettings';
import SafetyAlert from './pages/SafetyAlert';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/report" element={<ReportForm />} />
            <Route path="/reports" element={<ReportList />} />
            <Route path="/chart" element={<ReportChart />} />
            <Route path="/alerts" element={<AlertSettings />} />
            <Route path="/safety" element={<SafetyAlert />} />
            <Route path="/admin" element={<AdminPanel />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
