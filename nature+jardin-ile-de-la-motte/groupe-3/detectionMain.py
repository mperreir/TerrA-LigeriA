import numpy as np
import cv2
import mediapipe as mp
import json
import socket

HOST = '127.0.0.1'
PORT = 65432


# def affichermain(img,imgRGB,zones,s):    
#     results = hands.process(imgRGB)

#     #print("[INFO] handmarks: {}".format(results.multi_hand_landmarks))

#     if results.multi_hand_landmarks:
#         #for hand_landmarks in results.multi_hand_landmarks:
#         for lm in [results.multi_hand_landmarks[0].landmark[8]]:
#             height, width, channel = img.shape
#             cx, cy = int(lm.x * width), int(lm.y * height)
#             cv2.circle(img, (cx, cy), 10, (255, 0, 255), cv2.FILLED)
#             if (str(cy) + "-" + str(cx)) in zones:
#                 ss = str(zones[str(cy) + "-" + str(cx)])
#                 s.sendall(ss.encode())
#             else:
#                 print("")
#         #mp_draw.draw_landmarks(img, results.multi_hand_landmarks[-1], mp_hands.HAND_CONNECTIONS)
#     return img


cam = cv2.VideoCapture(1,cv2.CAP_DSHOW)
  
if not cam.isOpened():
    print("Cannot open camera")
    exit()

mp_hands = mp.solutions.hands
hands = mp_hands.Hands()
mp_draw = mp.solutions.drawing_utils

f = open("zones.txt", "r")
zones = json.loads(f.read())
f.close()
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


print("Calibrage")
while True:
    _, img = cam.read()
    imgRGB = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
    

    img = cv2.addWeighted(img, 0.5, img2, 0.5, 0)     

    cv2.imshow("image", img)
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

prec = -1
print("Debut du jeu")
with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
    s.connect((HOST, PORT))

    while True:
        _, img = cam.read()


        imgRGB = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
        #img = affichermain(img,imgRGB,zones,s)

        results = hands.process(imgRGB)

        #print("[INFO] handmarks: {}".format(results.multi_hand_landmarks))

        if results.multi_hand_landmarks:
            #for hand_landmarks in results.multi_hand_landmarks:
            for lm in [results.multi_hand_landmarks[0].landmark[8]]:
                height, width, channel = img.shape
                cx, cy = int(lm.x * width), int(lm.y * height)
                cv2.circle(img, (cx, cy), 10, (255, 0, 255), cv2.FILLED)

                if (str(cy) + "-" + str(cx)) in zones:
                    val = zones[str(cy) + "-" + str(cx)]
                else:
                    val = 0

                if prec != val:
                    s.sendall(str(val).encode())
                    prec = val


            #mp_draw.draw_landmarks(img, results.multi_hand_landmarks[-1], mp_hands.HAND_CONNECTIONS)


        cv2.imshow("image", img)
        if cv2.waitKey(1) & 0xFF == ord('q'):
            break

cam.release()
cv2.destroyAllWindows()

