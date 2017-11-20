import socket
import struct
import json

UDP_IP = "127.0.0.1"
UDP_PORT = 20777

sock = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
sock.bind((UDP_IP, UDP_PORT))

class Car:
    def __init__(self):
        self.last_lap_time = 0
        self.current_lap_time = 0
        self.best_lap_time = 0
        self.sector_1_time = 0
        self.sector_2_time = 0
        self.lap_distance = 0
        self.driver_id = 0
        self.team_id = 0
        self.car_position = 0
        self.current_lap_number = 0
        self.tyre_compound = 0
        self.in_pits = 0
        self.sector = 0
        self.current_lap_invalid = 0
        self.penalties = 0

    def dump(self):
        return {'last_lap_time':self.last_lap_time,
                        'current_lap_time': self.current_lap_time,
                        'best_lap_time': self.best_lap_time,
                        'sector_1_time': self.sector_1_time,
                        'sector_2_time': self.sector_2_time,
                        'lap_distance': self.lap_distance,
                        'driver_id': self.driver_id,
                        'team_id': self.team_id,
                        'car_position': self.car_position,
                        'current_lap_number': self.current_lap_number,
                        'tyre_compound': self.tyre_compound,
                        'in_pits': self.in_pits,
                        'sector': self.sector,
                        'current_lap_invalid': self.current_lap_invalid,
                        'penalties': self.penalties
        }

class Session:
    def __init__(self):
        self.time = 0
        self.lap_time = 0
        self.lap_distance = 0
        self.total_distance = 0
        self.total_laps = 0
        self.track_size = 0
        self.session_type = 0
        self.drs_allowed = 0
        self.track_number = 0
        self.vehicle_fia_flags = 0
        self.session_time_left = 0
        self.number_of_cars = 0

def create_car_objects(data):
    cars = []
    number_of_cars = struct.unpack('b', data[335:336])[0]  # 4 bytes at a time
    print(number_of_cars)
    for i in range(number_of_cars):
        car = Car()
        car.last_lap_time = struct.unpack('f', data[349 + 45 * i:349 + 45 * i + 4])[0]
        car.current_lap_time = struct.unpack('f', data[353 + 45 * i:353 + 45 * i + 4])[0]
        car.best_lap_time = struct.unpack('f', data[357 + 45 * i:357 + 45 * i + 4])[0]
        car.sector_1_time = struct.unpack('f', data[361 + 45 * i:361 + 45 * i + 4])[0]
        car.sector_2_time = struct.unpack('f', data[365 + 45 * i:365 + 45 * i + 4])[0]
        car.lap_distance = struct.unpack('f', data[369 + 45 * i:369 + 45 * i + 4])[0]
        car.driver_id = struct.unpack('b', data[373 + 45 * i:373 + 45 * i + 1])[0]
        car.team_id = struct.unpack('b', data[374 + 45 * i:374 + 45 * i + 1])[0]
        car.car_position = struct.unpack('b', data[375 + 45 * i:375 + 45 * i + 1])[0]
        car.current_lap_number = struct.unpack('b', data[376 + 45 * i:376 + 45 * i + 1])[0]
        car.tyre_compound = struct.unpack('b', data[377 + 45 * i:377 + 45 * i + 1])[0]
        car.in_pits = struct.unpack('b', data[378 + 45 * i:378 + 45 * i + 1])[0]
        car.sector = struct.unpack('b', data[379 + 45 * i:379 + 45 * i + 1])[0]
        car.current_lap_invalid = struct.unpack('b', data[380 + 45 * i:380 + 45 * i + 1])[0]
        car.penalties = struct.unpack('b', data[381 + 45 * i:381 + 45 * i + 1])[0]

        cars.append(car)
    return cars

def create_session_object(data):
    session = Session()

    session.time = struct.unpack('f', data[0:4])[0]
    session.lap_time = struct.unpack('f', data[4:8])[0]
    session.lap_distance = struct.unpack('f', data[8:12])[0]
    session.total_distance = struct.unpack('f', data[12:16])[0]
    session.total_laps = struct.unpack('f', data[240:244])[0]
    session.track_size = struct.unpack('f', data[244:248])[0]
    session.session_type = struct.unpack('f', data[264:268])[0]
    session.drs_allowed = struct.unpack('f', data[268:272])[0]
    session.track_number = struct.unpack('f', data[272:276])[0]
    session.vehicle_fia_flags = struct.unpack('f', data[276:280])[0]
    session.session_time_left = struct.unpack('f', data[328:332])[0]
    session.number_of_cars = struct.unpack('b', data[335:336])[0]

    return session

while True:
    data, addr = sock.recvfrom(1289)

    cars = create_car_objects(data)
    session = create_session_object(data)

    jsonoutput = []

    for car in cars:
        d = car.__dict__
        jsonoutput.append(json.dumps(d, ensure_ascii=False))


    print(jsonoutput)
    with open('data.json', 'w') as f:
        json.dump([car.dump() for o in cars],f)