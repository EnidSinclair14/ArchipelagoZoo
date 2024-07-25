import uuid
from sqlalchemy.dialects.mysql import CHAR
from sqlalchemy import Column, String
from . import db

class User(db.Model):
  id = db.Column(CHAR(36), primary_key=True, default=lambda: str(uuid.uuid4()), unique=True, nullable=False)
  username = db.Column(db.String(80), unique=True, nullable=False)
  email = db.Column(db.String(150), unique=True, nullable=False)
  password = db.Column(db.String(200), nullable=False)
