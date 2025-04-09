from flask import Blueprint, request, jsonify
from app import db
from app.models import CrimeReport

crime_bp = Blueprint('crime_bp', __name__)

@crime_bp.route('/crime_reports', methods=['POST'])
def create_report():
    data = request.get_json()
    new_report = CrimeReport(
        title=data.get('title'),
        description=data.get('description'),
        report_type=data.get('report_type'),
        severity=data.get('severity'),
        region_id=data.get('region_id')
    )
    db.session.add(new_report)
    db.session.commit()
    return jsonify({"message": "Report created successfully"}), 201

@crime_bp.route('/crime_reports', methods=['GET'])
def get_reports():
    reports = CrimeReport.query.all()
    return jsonify([{
        'id': r.id,
        'title': r.title,
        'description': r.description,
        'report_type': r.report_type,
        'severity': r.severity,
        'region': r.region.name if r.region else None
    } for r in reports])
