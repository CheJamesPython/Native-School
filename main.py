from socket import socket, AF_INET, SOCK_STREAM

server = socket(AF_INET, SOCK_STREAM)
server.bind(('192.168.1.133', 5501))
server.listen()
client_sock, address = server.accept()

message = client_sock.recv(10_000)

