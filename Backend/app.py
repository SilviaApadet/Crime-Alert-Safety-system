from flask import Flask, jsonify, request
from flask import Flask, jsonify, request
from flask_cors import CORS
from models import db, CrimeReport
from app.routes.admin import admin_bp
from datetime import datetime

# Initialize the Flask app first
app = Flask(__name__)

# Configuration
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///crime_reports.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Initialize extensions
db.init_app(app)
CORS(app, origins=["http://127.0.0.1:5173"], supports_credentials=True)

# Register blueprints
app.register_blueprint(admin_bp)

# Routes
@app.route('/reports', methods=['GET', 'POST', 'OPTIONS'])
@app.route('/api/reports', methods=['GET', 'POST', 'OPTIONS'])  # Alias
def crime_reports():
    if request.method == 'OPTIONS':
        response = jsonify({'message': 'CORS preflight'})
        response.status_code = 204
        return response

    if request.method == 'GET':
        reports = CrimeReport.query.all()
        return jsonify([
            {
                'id': report.id,
                'name': report.name,
                'age': report.age,
                'phone': report.phone,
                'type': report.report_type,
                'description': report.description,
                'location': report.location,
                'date': report.date.isoformat() if report.date else None,
                'created_at': report.created_at.isoformat() if report.created_at else None
            }
            for report in reports
        ]), 200

    if request.method == 'POST':
        try:
            data = request.get_json()

            required_fields = ['name', 'age', 'phone', 'type', 'description', 'location', 'date']
            if not all(field in data and data[field] for field in required_fields):
                return jsonify({'error': 'Missing required fields'}), 400

            # Parse and format date if needed
            try:
                incident_date = datetime.fromisoformat(data['date'])
            except ValueError:
                return jsonify({'error': 'Invalid date format'}), 400

            new_report = CrimeReport(
                name=data['name'],
                age=int(data['age']),
                phone=data['phone'],
                report_type=data['type'],
                description=data['description'],
                location=data['location'],
                date=incident_date
            )

            db.session.add(new_report)
            db.session.commit()

            return jsonify({
                "message": "Report created successfully",
                "report": {
                    "id": new_report.id,
                    "name": new_report.name,
                    "type": new_report.report_type
                }
            }), 201

        except Exception as e:
            print("Error creating report:", e)
            return jsonify({"error": "Internal Server Error"}), 500

# Run the app
if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True)
