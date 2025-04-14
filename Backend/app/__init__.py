# app/__init__.py
from flask import Flask
from flask_cors import CORS
from config import Config
from flask_login import LoginManager
from .extensions import db, migrate  # Extensions for DB and migrations

login_manager = LoginManager()  # Initialize LoginManager

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)

    # Initialize extensions
    db.init_app(app)
    migrate.init_app(app, db)
    CORS(app)

    # Initialize Flask-Login
    login_manager.init_app(app)
    login_manager.login_view = 'auth.login'

    # Register Blueprints
    from .routes.auth import auth_bp
    from .routes.report import report_bp
    from .routes.alert import alert_bp
    from .routes.stats import stats_bp

    app.register_blueprint(auth_bp)
    app.register_blueprint(report_bp)
    app.register_blueprint(alert_bp)
    app.register_blueprint(stats_bp)

    return app

