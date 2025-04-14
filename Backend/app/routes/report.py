# app/routes/report.py
from flask import Blueprint, request, jsonify
from app.models import CrimeReport  # Ensure correct import
from app.extensions import db

report_bp = Blueprint('report', __name__)

@report_bp.route('/report', methods=['POST'])
def report_crime():
    title = request.json.get('title')
    description = request.json.get('description')

    new_report = CrimeReport(title=title, description=description)
    db.session.add(new_report)
    db.session.commit()
    
    return jsonify({'message': 'Crime report created successfully!'}), 201
