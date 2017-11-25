from datetime import datetime
import json
import logging

from decimal import Decimal

from django.http import JsonResponse
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import LiveCarData, Session

CURRENT_SESSIONS = {}


class LiveData(APIView):
    """
    Class that is able to receive live data and return it.
    """
    def post(self, request):
        """
        Post function to receive the live UDPTelemetry data and save this
            data in models.

        Args:
            request (Request): The request containing the POST data.
        """
        live_data = json.loads(request.body.decode('utf-8'))
        session_id = live_data['session']['session_id']

        if session_id not in CURRENT_SESSIONS:
            session = Session.objects.get(id=session_id)
            CURRENT_SESSIONS[session_id] = session

        session = CURRENT_SESSIONS[session_id]
        session.session_time_left = live_data['session']['session_time_left']
        session.save()

        current_time = datetime.now()
        for car in live_data['cars']:
            LiveCarData.objects.create(
                created=current_time,
                driver_id=car['driver_id'],
                session=CURRENT_SESSIONS[session_id],
                current_lap_time=Decimal(str(car['current_lap_time'])),
                best_lap_time=Decimal(str(car['best_lap_time'])),
                sector_1_time=Decimal(str(car['sector_1_time'])),
                sector_2_time=Decimal(str(car['sector_2_time'])),
                car_position=car['car_position'],
                tyre_compound=car['tyre_compound'],
                in_pits=car['in_pits'],
                current_lap_invalid=car['current_lap_invalid'],
                penalties=car['penalties'],
                vehicle_fia_flag=live_data['session']['vehicle_fia_flags'],
            )
        return Response(status=200)

    def get(self, request, session_id):
        """
        Function to get the livedata information from objects.

        Args:
            request (Request): The request object.
            session_id (unicode): The session id.
        """
        session = Session.objects.get(id=session_id)
        cars_data = LiveCarData.objects.filter(session=session).order_by('-created')[:session.number_of_cars]
        json_dict = {
            'session': {
                'session_time_left': session.session_time_left,
                'vehicle_fia_flag': cars_data[0].vehicle_fia_flag
            },
            'cars': []
        }
        for car in cars_data:
            car_dict = {
                'driver_id': car.driver_id,
                'current_lap_time': str(car.current_lap_time),
                'best_lap_time': str(car.best_lap_time),
                'sector_1_time': str(car.sector_1_time),
                'sector_2_time': str(car.sector_2_time),
                'car_position': car.car_position,
                'tyre_compound': car.tyre_compound,
                'in_pits': car.in_pits,
                'current_lap_invalid': car.current_lap_invalid,
                'penalties': car.penalties,
            }
            json_dict['cars'].append(car_dict)
        return JsonResponse(json_dict)
