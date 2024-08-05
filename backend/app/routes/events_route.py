from flask import Blueprint, jsonify
from ..models import Animal
from .. import db

events = Blueprint('events', __name__)

@events.routes('/events', methods=['GET'])
def get_events():
  pass