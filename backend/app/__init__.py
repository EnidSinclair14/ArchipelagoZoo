from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
# from flask_jwt_extended import JWTManager


db = SQLAlchemy()

def create_app():
    app = Flask(__name__)
    CORS(app)
    
    # LOCAL SQL PATH
    # app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+mysqlconnector://root:m12c04s04@localhost:3306/ArchipelagoZoo'
    
    # PHPMYADMIN PATH
    app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+mysqlconnector://root:@localhost:3306/ArchipelagoZoo'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

    # Initialize the database
    db.init_app(app)
    
    # Initialize JWT
    # jwt = JWTManager(app)

    # Automaticly creating the models
    with app.app_context():
      from .models import User
      db.create_all()

    # Register Blueprints
    from .routes.auth_routes import auth # importing the auth blueprint

    app.register_blueprint(auth, url_prefix='/auth')

    return app


# ! TO CALL THE ROUTES
'''
/auth/login
/auth/register

....etc
'''