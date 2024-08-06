from flask import Blueprint, jsonify
from ..models import Events
from .. import db

events = Blueprint('events', __name__)

@events.route('/event', methods=['GET'])
def get_events():
  events = Events.query.all()
  events_list = [{
    'id': event.id,
    'event_name': event.event_name,
    'date_time': event.date_time,
    'event_date_ended': event.event_date_ended,
    'event_desc': event.event_desc,
    'pict_link': event.pict_link,
    'adult_price': event.adult_price,
    'child_price': event.child_price,
  } for event in events]
  return jsonify(events_list), 200