from flask_sqlalchemy import SQLAlchemy
from flask_login import UserMixin

db = SQLAlchemy()

class CrimeReport(db.Model):
    __tablename__ = 'crime_reports'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    age = db.Column(db.Integer, nullable=False)
    phone = db.Column(db.String(20), nullable=False)  # Updated
    report_type = db.Column(db.String(100), nullable=False)  # Updated
    description = db.Column(db.Text, nullable=False)
    location = db.Column(db.String(150), nullable=False)
    date = db.Column(db.Date, nullable=False)  # Updated
    created_at = db.Column(db.DateTime, default=db.func.now())

    def __repr__(self):
        return f'<CrimeReport {self.report_type} at {self.location}>'


class User(UserMixin, db.Model):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(150), nullable=False, unique=True)
    password = db.Column(db.String(150), nullable=False)

    def __repr__(self):
        return f'<User {self.username}>'
