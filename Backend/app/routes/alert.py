from flask import Blueprint

alert_bp = Blueprint('alert', __name__)

@alert_bp.route('/alerts')
def get_alerts():
    return {'message': 'All alerts'}
