from flask import Blueprint

stats_bp = Blueprint('stats', __name__)

@stats_bp.route('/stats')
def get_stats():
    return {'message': 'Stats endpoint working'}
