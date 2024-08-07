from flask import Blueprint, jsonify, request
from ..models import User
from .. import db
from werkzeug.security import generate_password_hash, check_password_hash # handle password hashing

# Path = [/auth/.....]
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
  
  return jsonify({'message': 'Login successful', 'user_id': user.id}), 200 


# Reset Password
@auth.route('/forgot_password', methods=['POST'])
def reset_password():
    data = request.get_json()
    username = data.get('username')
    email = data.get('email')
    new_password = data.get('new_password')

    user = User.query.filter_by(username=username, email=email).first()
    if not user:
        return jsonify({'message': 'Email not found'}), 404

    user.password = generate_password_hash(new_password)
    db.session.commit()
    return jsonify({'message': 'Password reset successful'}), 200