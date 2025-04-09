# app/routes/auth.py
from flask import Blueprint, render_template, redirect, url_for, request
from flask_login import login_user, login_required, logout_user
from app import db
from app.models import User

# Define the Blueprint for auth
auth_bp = Blueprint('auth', __name__)

# Route for login
@auth_bp.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        user = User.query.filter_by(username=username).first()

        if user and user.password == password:  # Add a proper hashing mechanism later
            login_user(user)
            return redirect(url_for('admin.index'))  # Redirect to the admin dashboard
        else:
            return 'Invalid credentials, please try again.'

    return render_template('login.html')

# Route for logout
@auth_bp.route('/logout')
@login_required
def logout():
    logout_user()
    return redirect(url_for('auth.login'))
