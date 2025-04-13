from flask import Blueprint

report_bp = Blueprint('report', __name__)

@report_bp.route('/reports')
def get_reports():
    return {'message': 'All reports'}
