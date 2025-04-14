<<<<<<< HEAD
from app.admin import admin_bp
=======
# app/admin.py

from flask import Blueprint

admin_bp = Blueprint('admin', __name__)

@admin_bp.route('/admin')
def admin_home():
    return "Welcome to the admin section"
>>>>>>> ac9b2bbd65b3fd20397bf318bb7126751bafc366
