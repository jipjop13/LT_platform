import socket
import struct

#

UDP_IP = "127.0.0.1"
UDP_PORT = 20777

sock = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)

sock.bind((UDP_IP, UDP_PORT))

class Car:
    def __init__(self):
        self.lastLapTime = 0
        self.currentLapTime = 0
        self.bestLapTime = 0
        self.sector1Time = 0
        self.sector2Time = 0
        self.lapDistance = 0
        self.driverId = 0
        self.teamId = 0
        self.carPosition = 0
        self.currentLapNum = 0
        self.tyreCompound = 0
        self.inPits = 0
        self.sector = 0
        self.currentLapInvalid = 0
        self.penalties = 0

    def __str__(self):
        return str(self.driverId)


class Session:
    def __init__(self):
        pass


car = Car
session = Session

def create_car_objects(number_of_cars, data):
    cars = []
    for i in range(number_of_cars):
        car = Car()
        car.lastLapTime = struct.unpack('f', data[349 + 45 * i:349 + 45 * i + 4])[0]
        car.currentLapTime = struct.unpack('f', data[353 + 45 * i:353 + 45 * i + 4])[0]
        car.bestLapTime = struct.unpack('f', data[357 + 45 * i:357 + 45 * i + 4])[0]
        car.sector1Time = struct.unpack('f', data[361 + 45 * i:361 + 45 * i + 4])[0]
        car.sector2Time = struct.unpack('f', data[365 + 45 * i:365 + 45 * i + 4])[0]
        car.lapDistance = struct.unpack('f', data[369 + 45 * i:369 + 45 * i + 4])[0]
        car.driverId = struct.unpack('b', data[373 + 45 * i:373 + 45 * i + 1])[0]
        car.teamId = struct.unpack('b', data[374 + 45 * i:374 + 45 * i + 1])[0]
        car.carPosition = struct.unpack('b', data[375 + 45 * i:375 + 45 * i + 1])[0] #track positions of vehicle
        car.currentLapNum = struct.unpack('b', data[376 + 45 * i:376 + 45 * i + 1])[0]
        car.tyreCompound = struct.unpack('b', data[377 + 45 * i:377 + 45 * i + 1])[0]
        car.inPits = struct.unpack('b', data[378 + 45 * i:378 + 45 * i + 1])[0] #0 = none, 1 = pitting, 2 = in pit area
        car.sector = struct.unpack('b', data[379 + 45 * i:379 + 45 * i + 1])[0] #0 = sector1, 1 = sector2, 2 = sector3
        car.currentLapInvalid = struct.unpack('b', data[380 + 45 * i:380 + 45 * i + 1])[0] #current lap invalid - 0 = valid, 1 = invalid
        car.penalties = struct.unpack('b', data[381 + 45 * i:381 + 45 * i + 1])[0] #accumulated time penalties in seconds to be added
        cars.append(car)
    return cars

while True:
    data, addr = sock.recvfrom(1289)
    i = 336
    session.numberOfCars = struct.unpack('b', data[335:i])[0]  # 4 bytes at a time

    cars = create_car_objects(session.numberOfCars, data)

    print(cars[0])

    for car in cars:
        print(car.sector)

