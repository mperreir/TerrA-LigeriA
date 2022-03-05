import numpy as np
import cv2
import mediapipe as mp
import json
import socket

#IP/Port de la socket
HOST = '127.0.0.1'
PORT = 65432

#Connexion à la caméra
#Sur PC portable : 0 = caméra interne, 1 = caméra externe
cam = cv2.VideoCapture(0)
  
if not cam.isOpened():
    print("Cannot open camera")
    exit()

#Pour capter les mains
mp_hands = mp.solutions.hands
hands = mp_hands.Hands()

#Chargement du fichier des zones
f = open("zones.txt", "r")
zones = json.loads(f.read())
f.close()

#Création d'une image avec une correspondance couleur/zone
img2 = 255 * np.ones((480,640,3), np.uint8)

for key, value in zones.items():
    coord = key.split('-')
    if value == 1:
        img2[int(coord[0])][int(coord[1])] = [255,0,0]
    elif value == 2:
        img2[int(coord[0])][int(coord[1])] = [0,255,0]
    elif value == 3:
        img2[int(coord[0])][int(coord[1])] = [0,0,255] 
    elif value == 4:
        img2[int(coord[0])][int(coord[1])]= [0,255,255]

#Calibrages des zones sur la caméra
print("Calibrage")
while True:
    _, img = cam.read()
    imgRGB = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
    

    img = cv2.addWeighted(img, 0.5, img2, 0.5, 0)     

    cv2.imshow("image", img)
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

#
prec = -1
print("Debut du jeu")

#Connexion à la socket
with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
    s.connect((HOST, PORT))

    #Lecture de la caméra
    while True:
        _, img = cam.read()

        #Traitement des mains
        imgRGB = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
        results = hands.process(imgRGB)
        if results.multi_hand_landmarks:
            #Récupération des coordonnées pointées par le bout de l'index
            for lm in [results.multi_hand_landmarks[0].landmark[8]]:
                height, width, channel = img.shape
                cx, cy = int(lm.x * width), int(lm.y * height)
                cv2.circle(img, (cx, cy), 10, (255, 0, 255), cv2.FILLED)

                #Envoie sur la socket de la zone pointée par le doigt
                if (str(cy) + "-" + str(cx)) in zones:
                    val = zones[str(cy) + "-" + str(cx)]
                else:
                    val = 0

                if prec != val:
                    print(val)
                    s.sendall(str(val).encode())
                    prec = val

        cv2.imshow("image", img)
        if cv2.waitKey(1) & 0xFF == ord('q'):
            break

cam.release()
cv2.destroyAllWindows()

