from pygame import mixer
import pygame
import socket
import time

HOST = '127.0.0.1'
PORT = 65432


# Starting the mixer
# Starting the mixer
mixer.init()
# Loading the song

sound=pygame.mixer.Sound("Sons/A.1.0.wav")
sound1=pygame.mixer.Sound("Sons/A.1.1.wav")
sound2=pygame.mixer.Sound("Sons/A.1.2.wav")
sound3=pygame.mixer.Sound("Sons/A.1.3.wav")
sound4=pygame.mixer.Sound("Sons/A.1.4.wav")
sound5=pygame.mixer.Sound("Sons/B.2.0.wav")
sound6=pygame.mixer.Sound("Sons/B.2.1.wav")
sound7=pygame.mixer.Sound("Sons/B.2.2.wav")
sound8=pygame.mixer.Sound("Sons/B.2.3.wav")
sound9=pygame.mixer.Sound("Sons/B.2.4.wav")



saison= "E"
zone= 0


with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
    s.bind((HOST, PORT))
    print("attente de msg")
    while True :
        s.listen()
        conn, addr = s.accept()
    
        with conn:
            print("Connected by", addr)
            while True:
                data = conn.recv(1024)
                if not data:
                    break
                data = data.decode('UTF-8')

                if data in ['E','H']:
                    saison = data
                else:
                    zone = int(data)

                if saison == "E" :
                    if zone == 1:
                        sound1.stop()
                        sound2.stop()
                        sound3.stop()
                        sound4.stop()

                        sound.play(-1)
                        print(zone)
                    elif zone == 2: 
                        sound.stop()
                        sound2.stop()
                        sound3.stop()
                        sound4.stop()


                        sound1.play(-1)
                        print(zone)
                    elif zone == 3:
                        sound1.stop()
                        sound.stop()
                        sound3.stop()
                        sound4.stop()

                        sound2.play(-1)
                    elif zone == 4:
                        sound1.stop()
                        sound2.stop()
                        sound.stop()
                        sound4.stop()

                        sound3.play(-1)
                        print(zone)
                    elif zone == 0:
                        sound1.stop()
                        sound2.stop()
                        sound3.stop()
                        sound.stop()

                        sound4.play(-1)
                if saison == "H":
                        if zone==1:
                            sound5.play(-1)
                        elif zone==2: 
                            sound6.play(-1)
                        elif zone==3:
                            sound7.play(-1)
                        elif zone==4:
                            sound8.play(-1)
                        elif zone==0: 
                            sound9.play(-1)





