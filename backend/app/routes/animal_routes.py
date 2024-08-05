from flask import Blueprint, jsonify
from ..models import Animal
from .. import db

animals = Blueprint('animals', __name__)

@animals.route('/animal', methods=['GET'])
def get_animals():
    animals = Animal.query.all()
    animal_list = [{
        'id': animal.id, 
        'name': animal.name, 
        'scientific_name': animal.scientific_name, 
        'habitats': animal.habitats, 
        'diets': animal.diets, 
        'general_desc': animal.general_desc, 
        'behavior': animal.behavior, 
        'size_weight': animal.size_weight,
        'conversation_stats': animal.conversation_stats,
        'conversation_efforts': animal.conversation_efforts,
        'reproduction': animal.reproduction,
        'funfact': animal.funfact,
        'img_link': animal.img_link
    } for animal in animals]
    return jsonify(animal_list), 200
