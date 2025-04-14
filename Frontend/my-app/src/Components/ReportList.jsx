import { useEffect, useState } from 'react';




const ReportList = () => {
  const [reports, setReports] = useState([]);




  useEffect(() => {
    fetch("http://localhost:5000/reports")
      .then((res) => res.json())
      .then((data) => setReports(data));
  }, []);




  return (
    <div className="report-container">
      <h2 className="report-list">Crime Reports</h2>
      {reports.length === 0 ? (
        <p>No reports found.</p>
      ) : (
        <div className="reporter-info">
          {reports.map((report) => (
            <div key={report.id} className="border p-4 rounded shadow-sm bg-white">
              <h3 className="text-xl font-semibold">{report.type}</h3>
              <p><strong>Description:</strong> {report.description}</p>
              <p><strong>Location:</strong> {report.location}</p>
              <p><strong>Date:</strong> {new Date(report.date).toLocaleDateString()}</p>




              {/* New Reporter Info */}
              <div className="mt-3 border-t pt-2">
                <p><strong>Reported By:</strong> {report.name}</p>
                <p><strong>Age:</strong> {report.age}</p>
                <p><strong>Phone:</strong> {report.phone}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};





export default ReportList;