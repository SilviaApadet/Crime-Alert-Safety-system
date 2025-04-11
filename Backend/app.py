from flask import Flask, jsonify
from flask_cors import CORS
from models import db, CrimeReport

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///crime_reports.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db.init_app(app)
CORS(app)

# Define a route for getting crime reports
@app.route('/api/reports', methods=['GET'])
def get_crime_reports():
    reports = CrimeReport.query.all()
    return jsonify([
        {
            'id': report.id,
            'title': report.title,
            'description': report.description,
            'created_at': report.created_at.isoformat()
        } for report in reports
    ])

if __name__ == '__main__':
    with app.app_context():
        db.create_all()  # This ensures tables are created before the first request
    app.run(debug=True)
