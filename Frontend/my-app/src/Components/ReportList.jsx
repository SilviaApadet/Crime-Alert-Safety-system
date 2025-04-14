import { useEffect, useState } from 'react';

const ReportList = () => {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/reports")
      .then((res) => res.json())
      .then((data) => setReports(data))
      .catch((err) => console.error("Error fetching reports:", err));
  }, []);

  return (
    <div className="report-list-container">
      <h2>Submitted Reports</h2>
      {reports.length === 0 ? (
        <p>No reports yet.</p>
      ) : (
        <ul className="report-list">
          {reports.map((report) => (
            <li key={report.id} className="report-card">
              <p><strong>Name:</strong> {report.name}</p>
              <p><strong>Age:</strong> {report.age}</p>
              <p><strong>Phone:</strong> {report.phone}</p>
              <p><strong>Type of Crime:</strong> {report.type}</p>
              <p><strong>Description:</strong> {report.description}</p>
              <p><strong>Location:</strong> {report.location}</p>
              <p><strong>Date of Incident:</strong> {new Date(report.date).toLocaleDateString()}</p>
              <p><strong>Reported At:</strong> {new Date(report.created_at).toLocaleString()}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ReportList;
