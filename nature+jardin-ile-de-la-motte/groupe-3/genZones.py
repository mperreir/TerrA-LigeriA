import numpy as np
import cv2
import mediapipe as mp
from os import system
import json

cam = cv2.VideoCapture(1,cv2.CAP_DSHOW)
  
if not cam.isOpened():
    print("Cannot open camera")
    exit()

mp_hands = mp.solutions.hands
hands = mp_hands.Hands()
mp_draw = mp.solutions.drawing_utils

img2 = 255 * np.ones((480,640,3), np.uint8)

cropping = False
zone = 1
zones = {}

def drawClick(event, x, y, flags, param):
    global img2, cropping, zones, zone
    if event == cv2.EVENT_LBUTTONDOWN:
        cropping = True
    elif event == cv2.EVENT_LBUTTONUP:
        cropping = False 
    if cropping:
        if zone == 1:
            couleur = [255,0,0]
        elif zone == 2:
            couleur = [0,255,0]
        elif zone == 3:
            couleur = [0,0,255]    
        else:
            couleur = [0,255,255]
        rayon = 20
        for i in range(x-rayon,x+rayon):
            for j in range(y-rayon,y+rayon):
                img2[j][i] = couleur
                strpx = str(j) + "-" + str(i)
                zones[strpx] = zone
        

_, img = cam.read()
#cv2.namedWindow("image", cv2.WND_PROP_FULLSCREEN)
#cv2.setWindowProperty("image",cv2.WND_PROP_FULLSCREEN,cv2.WINDOW_FULLSCREEN)
cv2.imshow("image", img)



cv2.setMouseCallback("image", drawClick)

#ajouter zone 1
while True:
    _, img = cam.read()
    
    img = cv2.addWeighted(img, 0.5, img2, 0.5, 0)     

    cv2.imshow("image", img)
    v = cv2.waitKey(1)
    if v & 0xFF == ord('q'):
        exit()
    if v & 0xFF == ord('n'):
        zone += 1
        print(zone)
    if zone == 5:
        break

serialized = json.dumps(zones)
f = open("zones.txt", "w")
f.write(str(serialized))
f.close()


