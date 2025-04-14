
//src/ App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import ReportList from './Components/ReportList';
import ReportChart from './Components/ReportChart';
import ReportForm from './Components/ReportForm';
import SafetyAlert from './Components/SafetyAlert';


const App = () => {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="container">
          <Routes>
            <Route path="/report" element={<ReportForm />} />
            <Route path="/reports" element={<ReportList />} />
            <Route path="/chart" element={<ReportChart />} />
            <Route path="/alerts" element={<SafetyAlert />} />
           </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
