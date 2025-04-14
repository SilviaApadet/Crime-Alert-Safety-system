function markAsResolved() {
    const selectedReports = getSelectedReports();
    selectedReports.forEach(reportId => {
        fetch(`/api/reports/${reportId}/resolve`, { method: 'POST' })
            .then(response => response.json())
            .then(data => {
                alert('Report resolved successfully');
                location.reload();
            });
    });
}

function deleteReports() {
    const selectedReports = getSelectedReports();
    selectedReports.forEach(reportId => {
        fetch(`/api/reports/${reportId}`, { method: 'DELETE' })
            .then(response => response.json())
            .then(data => {
                alert('Report deleted successfully');
                location.reload();
            });
    });
}

function getSelectedReports() {
    // TODO: Replace with actual selection logic (e.g., checkboxes)
    return [1, 2, 3];
}

function viewReport(reportId) {
    window.location.href = `/admin/reports/view/${reportId}`;
}

function deleteReport(reportId) {
    if (confirm('Are you sure you want to delete this report?')) {
        fetch(`/api/reports/${reportId}`, { method: 'DELETE' })
            .then(response => response.json())
            .then(data => {
                alert('Report deleted successfully');
                location.reload();
            });
    }
}
