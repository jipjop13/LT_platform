import socket
import struct

#

UDP_IP = "127.0.0.1"
UDP_PORT = 20777

sock = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)

sock.bind((UDP_IP, UDP_PORT))

class Car:
    def __init__(self):
        pass


class Session:
    def __init__(self):
        pass


car = Car
session = Session

while True:
    data, addr = sock.recvfrom(1389)
    car.lapTime = struct.unpack('f', data[4:8])[0]  # 4 bytes at a time
    car.speed = struct.unpack('f', data[28:32])[0]  # 4 bytes at a time

    print ("laptime:", car.lapTime)
    print("speed:", car.speed)

