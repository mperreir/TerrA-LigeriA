from pygame import mixer
import pygame
import socket


# Démarrage du mixer
mixer.init()

# Initialisation des sons

# Sons de l'été
sound=pygame.mixer.Sound("Sons/A.1.0.wav")
sound1=pygame.mixer.Sound("Sons/A.1.1.wav")
sound2=pygame.mixer.Sound("Sons/A.1.2.wav")
sound3=pygame.mixer.Sound("Sons/A.1.3.wav")
sound4=pygame.mixer.Sound("Sons/A.1.4.wav")

# Sons de l'hiver
sound5=pygame.mixer.Sound("Sons/B.2.0.wav")
sound6=pygame.mixer.Sound("Sons/B.2.1.wav")
sound7=pygame.mixer.Sound("Sons/B.2.2.wav")
sound8=pygame.mixer.Sound("Sons/B.2.3.wav")
sound9=pygame.mixer.Sound("Sons/B.2.4.wav")


# Initialisation des variables liées au socket
HOST = '127.0.0.1'
PORT = 65432

saison= "R"
zone= 0
saisonprec = "R"
zoneprec = 0

# Un channel est une piste sur laquelle pygame va lancer un son
channel1 = pygame.mixer.Channel(0)


with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
    s.bind((HOST, PORT))
    print("attente de msg")
    while True :
        s.listen()
        conn, addr = s.accept()
    
        with conn:
            print("Connected by", addr)
            while True:
                data = conn.recv(1024) # Bloaquant, en attente d'un message du socket
                if not data:
                    break
                data = data.decode('UTF-8')

                # Si le socket envoie un données liée à un changement de plaque
                if data in ['E','H','R'] and saison != saisonprec:
                    saison = data
                elif zone != zoneprec:
                    zone = int(data)    # Ou a une de la main au dessus d'une zone
                print(data)
                
                # 'Choix' du son à diffuser en fonction des données reçues
                if saison == "E" :

                    if zone == 1:
                        channel1.fadeout(500)   # On diminue le volume du son en cours
                        while channel1.get_busy():  # On attend que le son se termine (que le channel ne soit plus occupé)
                             pass
                        channel1.play(sound,loops=-1,fade_ms=500)   # On lance le nouveau son

                    elif zone == 2: 
                        channel1.fadeout(500)
                        while channel1.get_busy():
                             pass
                        channel1.play(sound1,loops=-1,fade_ms=500)

                    elif zone == 3:
                        channel1.fadeout(500)
                        while channel1.get_busy():
                             pass
                        channel1.play(sound2,loops=-1,fade_ms=500)

                    elif zone == 4:
                        channel1.fadeout(500)
                        while channel1.get_busy():
                             pass
                        channel1.play(sound3,loops=-1,fade_ms=500)

                    elif zone == 0:
                        channel1.fadeout(500)
                        while channel1.get_busy():
                             pass
                        channel1.play(sound4,loops=-1,fade_ms=500)

                elif saison == "H":

                    if zone==1:
                        channel1.fadeout(500)
                        while channel1.get_busy():
                             pass
                        channel1.play(sound5,loops=-1,fade_ms=500)

                    elif zone==2: 
                        channel1.fadeout(500)
                        while channel1.get_busy():
                             pass
                        channel1.play(sound6,loops=-1,fade_ms=500)

                    elif zone==3:
                        channel1.fadeout(500)
                        while channel1.get_busy():
                             pass
                        channel1.play(sound7,loops=-1,fade_ms=500)

                    elif zone==4:
                        channel1.fadeout(500)
                        while channel1.get_busy():
                             pass
                        channel1.play(sound8,loops=-1,fade_ms=500)

                    elif zone==0:
                        channel1.fadeout(500)
                        while channel1.get_busy():
                             pass
                        channel1.play(sound9,loops=-1,fade_ms=500)
                # S'il n'y a plus de plaque, on diminue puis coupe le son
                else:
                    channel1.fadeout(500)       
                    while channel1.get_busy():
                        pass

                saisonprec = saison
                zoneprec = zone
                saison = ""
                zone = -1




