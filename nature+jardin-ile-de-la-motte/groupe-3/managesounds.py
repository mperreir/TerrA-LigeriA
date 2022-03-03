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



saison= ""
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

                print(data)
                if data in ['E','H','R']:
                    saison = data
                else:
                    zone = int(data)

                if saison == "E" :
                    if zone == 1:
                        mixer.stop()

                        sound.play(-1)
                    elif zone == 2: 
                        mixer.stop()


                        sound1.play(-1)
                    elif zone == 3:
                        mixer.stop()

                        sound2.play(-1)
                    elif zone == 4:
                        mixer.stop()

                        sound3.play(-1)
                    elif zone == 0:
                        mixer.stop()

                        sound4.play(-1)
                elif saison == "H":
                        if zone==1:
                            mixer.stop()
                            sound5.play(-1)
                        elif zone==2: 
                            mixer.stop()
                            sound6.play(-1)
                        elif zone==3:
                            mixer.stop()
                            sound7.play(-1)
                        elif zone==4:
                            mixer.stop()
                            sound8.play(-1)
                        elif zone==0:
                            mixer.stop()
                            sound9.play(-1)
                else:
                    mixer.stop()





