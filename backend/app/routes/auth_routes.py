from flask import Blueprint, jsonify, request
from ..models import User
from .. import db
from werkzeug.security import generate_password_hash, check_password_hash # handle password hashing
# from flask_jwt_extended import create_access_token # handle jwt token creation


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
@auth.route('/login', methods=['GET'])
def login():
  data = request.get_json()
  
  # Memfilter data user dari tabel user
  user = User.query.filter_by(username=data['username']).first()
    
  if not user or not check_password_hash(user.password, data['password']):
    return jsonify({'message': 'Invalid username or password'}), 401
  
  # Create a JWT token
  # access_token = create_access_token(identity=user.id)
  
  response = jsonify({'message': 'Login successful'})
  # response = jsonify({'message': 'Login successful', 'access_token': access_token})
  response.status_code = 200
  return response