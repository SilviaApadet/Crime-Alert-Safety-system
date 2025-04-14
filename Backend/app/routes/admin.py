<<<<<<< HEAD
# app/admin.py

from flask import Blueprint

admin_bp = Blueprint('admin', __name__)

@admin_bp.route('/admin')
def admin_home():
    return "Welcome to the admin section"
=======
from app.admin import admin_bp
>>>>>>> c93418bef0aaff8d36d835125b69d9755f45b9ad
