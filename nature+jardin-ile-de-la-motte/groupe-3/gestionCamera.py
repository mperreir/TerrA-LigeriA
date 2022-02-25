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
cam = cv2.VideoCapture(1,cv2.CAP_DSHOW)
  
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


#Instanciation des variables pour la détection de couleur des plaques
compteurImage=0
whiteSumMean=0
greenSumMean=0
blackSumMean=0
previousColor = None

#Connexion à la socket
with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
    s.connect((HOST, PORT))


    while True:
        # Lecture de la caméra
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
                    s.sendall(str(val).encode())
                    prec = val

        cv2.imshow("image", img)

        #Détection de la plaque utlisée

        imgHSV = cv2.cvtColor(img, cv2.COLOR_BGR2HSV) #Conversion du format BGR en HSV


        lowWhiteLimit = np.array([0, 0, 150])  #Mise en place du seuil HSV limite bas du blanc
        upWhiteLimit = np.array([100, 75, 255])  #Mise en place du seuil HSV limite haut du blanc

        lowGreenLimit = np.array([30, 50, 50]) #Mise en place du seuil HSV limite bas du vert
        upGreenLimit = np.array([70, 255, 255]) #Mise en place du seuil HSV limite haut du vert

        lowBlackLimit = np.array([100, 0, 0]) #Mise en place du seuil HSV limite bas du noir
        upBlackLimit = np.array([200, 50, 125]) #Mise en place du seuil HSV limite haut du noir

        #Création des masques correspondant à chaque couleur
        whiteMask = cv2.inRange(imgHSV, lowWhiteLimit, upWhiteLimit)
        greenMask = cv2.inRange(imgHSV, lowGreenLimit, upGreenLimit)
        blackMask = cv2.inRange(imgHSV, lowBlackLimit, upBlackLimit)


        #Application des masques sur notre images de base
        whiteFrame = cv2.bitwise_and(img, img, mask=whiteMask)
        greenFrame = cv2.bitwise_and(img, img, mask=greenMask)
        blackFrame = cv2.bitwise_and(img, img, mask=blackMask)

        #Sélection d'une région en particulier
        subImageFrame = img[125:125+50, 50:50+325]
        subImageWhite = whiteFrame[125:125+50, 50:50+325]
        subImageGreen = greenFrame[125:125+50, 50:50+325]
        subImageBlack = blackFrame[125:125+50, 50:50+325]

        #On récupère la moyenne des valeurs des pixels de la région pour déterminer
        #a quelle couleur elle correspond
        whiteMean = subImageWhite.mean()
        greenMean = subImageGreen.mean()
        blackMean = subImageBlack.mean()

        #Somme des moyennes
        whiteSumMean += whiteMean
        greenSumMean += greenMean
        blackSumMean += blackMean
        #Affichages pour Tests
        # cv2.imshow('Original', frame)
        # cv2.imshow('White Detector', whiteFrame)
        # cv2.imshow('Green Detector', greenFrame)
        # cv2.imshow('Black Detector', blackFrame)
        # cv2.imshow('Sub_Original', subImageFrame)
        # cv2.imshow('Sub_White Detector', subImageWhite)
        # cv2.imshow('Sub_Green Detector', subImageGreen)
        # cv2.imshow('Sub_Black Detector', subImageBlack)

        #COmpte jusqu'à 60 images pour déterminer la couleur dominante
        compteurImage += 1
        if compteurImage == 60:
            if whiteSumMean > greenSumMean and whiteSumMean > blackSumMean:
                color = "White"
                value = "Vide"
            elif greenSumMean > whiteSumMean and greenSumMean > blackSumMean:
                color = "Green"
                value = "Ete"
            elif blackSumMean > greenSumMean and blackSumMean > whiteSumMean:
                color = "Black"
                value = "Hiver"

            if previousColor != color:
                #print(color)
                s.sendall(str(value).encode())
                previousColor = color
            #Affichage des valeurs pour Tests
            # print("White : ", whiteSumMean, "\tGreen : ", greenSumMean, "\tBlack : ", blackSumMean)
            compteurImage = 0
            whiteSumMean = 0
            greenSumMean = 0
            blackSumMean = 0

        if cv2.waitKey(1) & 0xFF == ord('q'):
            break

cam.release()
cv2.destroyAllWindows()

