from flask import Flask, jsonify, request
from flask_cors import CORS
from models import db, CrimeReport
from app.admin import admin_bp

# Initialize the Flask app first
app = Flask(__name__)

# Set the configuration for the app
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///crime_reports.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Initialize the database
db.init_app(app)

# Register the Blueprint for the admin panel
app.register_blueprint(admin_bp)

# Enable CORS
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

# Define a route for posting new crime reports
@app.route('/api/reports', methods=['POST'])
def create_crime_report():
    data = request.get_json()

    # Create a new CrimeReport instance
    report = CrimeReport(
        title=data.get('type'),
        description=data.get('description'),
       
    )

    # Add the new report to the session and commit it to the database
    db.session.add(report)
    db.session.commit()

    # Return a success message
    return jsonify({"message": "Report created successfully"}), 201

# Ensure the tables are created before the first request
if __name__ == '__main__':
    with app.app_context():
        db.create_all()  # This ensures tables are created before the first request
    app.run(debug=True)
