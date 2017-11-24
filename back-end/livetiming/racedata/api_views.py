import json

from decimal import Decimal
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import LiveCarData, Session

CURRENT_SESSIONS = {}


class ReceiveLiveData(APIView):
    """
    Class that receives data from the UDPTelemetry app.
    """
    def post(self, request):
        """
        Post function to receive the live UDPTelemetry data.

        Args:
            request (Request): The request containing the POST data.
        """
        live_data = json.loads(request.body.decode('utf-8'))
        session_id = live_data['session']['session_id']

        if session_id not in CURRENT_SESSIONS:
            session = Session.objects.get(id=session_id)
            CURRENT_SESSIONS[session_id] = session

        for car in live_data['cars']:
            LiveCarData.objects.create(
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
