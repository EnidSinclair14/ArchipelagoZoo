from flask import Blueprint, request, jsonify
from ..models import Booking, User, Events
from .. import db
from datetime import datetime
import uuid

booking = Blueprint('booking', __name__)

@booking.route('/book', methods=['POST'])
def book_tickets():
    data = request.json
    tickets = data.get('tickets')

    if not tickets:
        return jsonify({'error': 'Invalid data'}), 400

    try:
        for ticket in tickets:
            user_id = ticket.get('user_id')
            event_id = ticket.get('event_id')
            quantity_adult = ticket.get('quantity_adult', 0)
            quantity_children = ticket.get('quantity_children', 0)
            total_price = ticket.get('total_price', 0)
            
            # Logging the received data
            print(f"Processing ticket: user_id={user_id}, event_id={event_id}, quantity_adult={quantity_adult}, quantity_children={quantity_children}, total_price={total_price}")

            # Create a new Booking record
            booking = Booking(
                id=str(uuid.uuid4()),
                user_id=user_id,
                event_id=event_id,
                quantity_adult=quantity_adult,
                quantity_child=quantity_children,
                total_price=total_price,
                date=datetime.now() 
            )
            db.session.add(booking)

        db.session.commit()
        return jsonify({'message': 'Booking successful!'}), 200
    except Exception as e:
        db.session.rollback()
        print(f"Error occurred: {e}")
        return jsonify({'error': 'Booking failed!'}), 500
