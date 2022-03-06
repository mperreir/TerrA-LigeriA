import numpy as np
import cv2 as cv
import socket

# Initialisation des vidéos

# Vidéo qui tourne lorsqu'il n'y à pas de plaque
plateau = cv.VideoCapture("./Videos/Plateau.mp4")

# Vidéos plaque été
e0 = cv.VideoCapture("./Videos/Estivale.mp4")
e1 = cv.VideoCapture("./Videos/Aigrette_garzette.mp4")
e2 = cv.VideoCapture("./Videos/Estivale.mp4") # Rien à ajouter plus tard
e3 = cv.VideoCapture("./Videos/Phragmite_des_joncs.mp4")
e3bis = cv.VideoCapture("./Videos/Rousserolle_affarvatte.mp4")
e4 = cv.VideoCapture("./Videos/Estivale.mp4") # Rien à ajouter plus tard

# Vidéos plaque hiver
h0 = cv.VideoCapture("./Videos/Hivernale.mp4")
h1 = cv.VideoCapture("./Videos/Hivernale.mp4") # Rien à ajouter plus tard
h2 = cv.VideoCapture("./Videos/Becassine_des_marais.mp4")
h3 = cv.VideoCapture("./Videos/Hivernale.mp4") # Rien à ajouter plus tard
h4 = cv.VideoCapture("./Videos/Sarcelle_hiver.mp4")
h4bis = cv.VideoCapture("./Videos/Courlis_cendre.mp4")

# booléen pour alterner entre les vidéos double sur les même zones (bis)
val_e3 = True
val_h4 = True

# Initialisation des la fenêtre en pleine écran pour afficher les vidéos
cv.namedWindow("window", cv.cv2.WND_PROP_FULLSCREEN)
cv.setWindowProperty("window",cv.WND_PROP_FULLSCREEN,cv.WINDOW_FULLSCREEN)

# Initialisation de la première image à afficher
vid = plateau
ret, frame = vid.read()
frame = cv.rotate(frame, cv.ROTATE_90_COUNTERCLOCKWISE)

# Initialisation des variables liées au socket
zone = 0
saison = "R"

HOST = '127.0.0.1'
PORT = 65432

with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
    s.bind((HOST, PORT))
    print("attente de msg du socket")
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
                if data in ['E','H','R']:
                    saison = data
                else:
                    zone = int(data)    # Ou a une de la main au dessus d'une zone
                print(data)
                
                i = 0

                # 'Choix' de la vidéo à afficher en fonction des données reçues
                if saison == "E":
                    if zone == 1:
                        vid = e1
                    elif zone == 2:
                        vid = e2
                    elif zone == 3:
                        if val_e3:
                            vid = e3
                            val_e3 = not val_e3
                        else:
                            vid = e3bis
                            val_e3 = not val_e3
                    elif zone == 4:
                        vid = e4
                    else:
                        vid = e0
                elif saison == "H":
                    if zone == 1:
                        vid = h1
                    elif zone == 2:
                        vid = h2
                    elif zone == 3:
                        vid = h3
                    elif zone == 4:
                        if val_h4:
                            vid = h4
                            val_h4 = not val_h4
                        else:
                            vid = h4bis
                            val_h4 = not val_h4
                    else:
                        vid = h0
                elif saison == "R":
                    vid = plateau
                    zone = 0

                # Affichage d'une boucle complète de vidéo
                while i <= 39:
                    ret, frame = vid.read()
                    frame = cv.rotate(frame, cv.ROTATE_90_COUNTERCLOCKWISE)    
                    cv.imshow("window", frame)
                    i += 1
                    if cv.waitKey(1) & 0xFF == ord('q'):
                        exit()
                
                # Puis remise à la frame 0 de la vidéo
                vid.set(1,0)
        

