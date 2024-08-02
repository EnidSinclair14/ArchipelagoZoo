from flask import Blueprint, jsonify, request
from ..models import User
from .. import db
from werkzeug.security import generate_password_hash, check_password_hash # handle password hashing

# Routes blueprint name
auth = Blueprint('auth', __name__)

#  Register 
@auth.route('/register', methods=['POST'])
def register():
  data = request.get_json()
  
  hashPassword = generate_password_hash(password=data['password'])
  # get the data to create new user
  new_user = User(username=data['username'], email=data['email'], password=hashPassword)
  
  db.session.add(new_user)
  db.session.commit()
  return jsonify({'message': 'User created successfully'}), 201

#  Login
@auth.route('/login', methods=['POST'])
def login():
  data = request.get_json()
  
  print('Received login data:', data)

  # Memfilter data user dari tabel user
  user = User.query.filter_by(username=data['username']).first()
    
  if not user or not check_password_hash(user.password, data['password']):
    return jsonify({'message': 'Invalid username or password'}), 401
  
  return jsonify({'message': 'Login successful'}), 200 