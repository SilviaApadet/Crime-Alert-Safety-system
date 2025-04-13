from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_cors import CORS
from config import Config

db = SQLAlchemy()
migrate = Migrate()

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)

    db.init_app(app)
    migrate.init_app(app, db)
    CORS(app)

    # Register Blueprints
    from .routes.report import report_bp
    from .routes.alert import alert_bp
    from .routes.stats import stats_bp

    app.register_blueprint(report_bp)
    app.register_blueprint(alert_bp)
    app.register_blueprint(stats_bp)
    
    # Debugging registered routes
    print(app.url_map)

    return app
