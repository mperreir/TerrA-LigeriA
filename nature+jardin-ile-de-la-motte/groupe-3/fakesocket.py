import socket

HOST = '127.0.0.1'
PORTV = 65432
PORTS = 65433

with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as sv:
    sv.connect((HOST, PORTV))

    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as ss:
        ss.connect((HOST, PORTS))

        while True:
            i = input()
            ss.sendall(str(i).encode())
            sv.sendall(str(i).encode())
