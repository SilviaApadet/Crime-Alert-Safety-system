from flask import Blueprint, render_template
from models import CrimeReport
from app import db

admin_bp = Blueprint('admin', __name__, url_prefix='/admin')

@admin_bp.route('/')
def dashboard():
    report_count = CrimeReport.query.count()
    return render_template('admin/dashboard.html', report_count=report_count)

@admin_bp.route('/reports')
def reports():
    reports = CrimeReport.query.all()
    return render_template('admin/reports.html', reports=reports)


