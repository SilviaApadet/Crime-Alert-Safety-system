import { useEffect, useState } from "react";

const ReportList = () => {
  const [reports, setReports] = useState([]);
  const [error, setError] = useState("");

  const fetchReports = async () => {
    try {
      const res = await fetch("http://localhost:5000/reports");
      const data = await res.json();
      setReports(data);
    } catch (err) {
      console.error("Failed to fetch reports", err);
      setError("Could not load reports.");
    }
  };

  useEffect(() => {
    fetchReports();
  }, []);

  return (
    <div className="report-list-container">
      <h2>Reported Crimes</h2>
      {error && <p className="error">{error}</p>}
      {reports.length === 0 ? (
        <p>No reports yet.</p>
      ) : (
        <ul className="report-list">
          {reports.map((report) => (
            <li key={report.id} className="report-card">
              <p><strong>Name:</strong> {report.name}</p>
              <p><strong>Age:</strong> {report.age}</p>
              <p><strong>Phone:</strong> {report.phone}</p>
              <p><strong>Type:</strong> {report.type}</p>
              <p><strong>Description:</strong> {report.description}</p>
              <p><strong>Location:</strong> {report.location}</p>
              <p><strong>Date:</strong> {new Date(report.date).toLocaleDateString()}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ReportList;

