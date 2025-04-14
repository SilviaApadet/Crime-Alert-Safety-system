// ReportPage.jsx
import { useEffect, useState } from "react";
import ReportForm from "./ReportForm";
import ReportList from "./ReportList";

const ReportPage = () => {
  const [reports, setReports] = useState([]);

  const fetchReports = () => {
    fetch("http://localhost:5000/reports")
      .then((res) => res.json())
      .then((data) => setReports(data))
      .catch((err) => console.error("Error fetching reports:", err));
  };

  useEffect(() => {
    fetchReports();
  }, []);

  return (
    <div className="report-page">
      <ReportForm onReportSubmitted={fetchReports} />
      <ReportList reports={reports} />
    </div>
  );
};

export default ReportPage;
