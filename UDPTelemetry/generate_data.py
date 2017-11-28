import json
import random
import time

from decimal import Decimal
import requests
from requests.auth import HTTPBasicAuth


def generate_data():
    while True:
        json_dict = {
            'session': {
                'session_time_left': str(Decimal('{0}.{1}'.format(random.randint(5000, 9000), random.randint(10001953125, 99901953125)))),
                'vehicle_fia_flags': random.randint(0, 3),
                'session_id': 7,  # random session ID change accordingly
            },
            'cars': []
        }
        for i in range(0, 19):
            car_dict = {
                'driver_id': i,
                'current_lap_time': str(Decimal('{0}.{1}'.format(random.randint(0, 100), random.randint(10001953125, 99901953125)))),
                'last_lap_time': str(Decimal('{0}.{1}'.format(random.randint(0, 100), random.randint(10001953125, 99901953125)))),
                'best_lap_time': str(Decimal('{0}.{1}'.format(random.randint(0, 100), random.randint(10001953125, 99901953125)))),
                'sector_1_time': str(Decimal('{0}.{1}'.format(random.randint(0, 30), random.randint(10001953125, 99901953125)))),
                'sector_2_time': str(Decimal('{0}.{1}'.format(random.randint(0, 30), random.randint(10001953125, 99901953125)))),
                'car_position': i,
                'current_lap_number': i,
                'tyre_compound': random.randint(0, 6),
                'in_pits': True if i % 2 else False,
                'current_lap_invalid': True if i % 2 else False,
                'penalties': random.randint(0, 20),
            }
            json_dict['cars'].append(car_dict)
        try:
            print('Sending data...')
            requests.post(
                'http://localhost:8001/livetiming/api/post-live-data/',  # insert correct URL
                data=json.dumps(json_dict),
                auth=HTTPBasicAuth('username', 'password'),  # insert usename and password of the API
                )
            print('Data send!')
        except ConnectionError:
            print('Cannot connect to backend, retrying...')
        time.sleep(1)

if __name__ == "__main__":
    generate_data()
