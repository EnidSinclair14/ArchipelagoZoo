import uuid
from sqlalchemy.dialects.mysql import CHAR #type: ignore
from sqlalchemy import Column, String #type: ignore
from . import db

class User(db.Model):
  id = db.Column(CHAR(36), primary_key=True, default=lambda: str(uuid.uuid4()), unique=True, nullable=False)
  username = db.Column(db.String(80), unique=True, nullable=False)
  email = db.Column(db.String(150), unique=True, nullable=False)
  password = db.Column(db.String(200), nullable=False)

class Animal(db.Model):
  __tablename__ = 'animal'
  id = db.Column(db.Integer, primary_key=True, autoincrement=True)
  name = db.Column(db.String(100), nullable=True, unique=False)
  scientific_name = db.Column(db.String(100), nullable=True)
  habitats = db.Column(db.String(200), nullable=True)
  diets = db.Column(db.String(200), nullable=True)
  general_desc = db.Column(db.String(255), nullable=True)
  behavior = db.Column(db.String(200), nullable=True)
  size_weight = db.Column(db.String(200), nullable=True) 
  conversation_stats = db.Column(db.String(200), nullable=True)
  conversation_efforts = db.Column(db.String(200), nullable=True)
  reproduction = db.Column(db.String(200), nullable=True)
  funfact = db.Column(db.String(200), nullable=True)
  img_link = db.Column(db.String(150), nullable=True)
