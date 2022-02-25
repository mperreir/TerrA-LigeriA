from svglib.svglib import svg2rlg
from reportlab.graphics import renderPM
import numpy as np
import cv2
import socket

# drawing1 = svg2rlg("./Images/img1.svg")
# renderPM.drawToFile(drawing1, "./Images/img1.png", fmt="PNG")

# drawing2 = svg2rlg("./Images/img2.svg")
# renderPM.drawToFile(drawing2, "./Images/img2.png", fmt="PNG")

#img1 = cv2.imread("./Images/img1.png")
#img2 = cv2.imread("./Images/Phragmite_des_jocs.png")

rien = cv2.imread("./Images/rien.png")

e1 = cv2.imread("./Images/E1.png")
e2 = cv2.imread("./Images/E2.png")
e3 = cv2.imread("./Images/E3.png")
e4 = cv2.imread("./Images/E4.png")

h1 = cv2.imread("./Images/H1.png")
h2 = cv2.imread("./Images/H2.png")
h3 = cv2.imread("./Images/H3.png")
h4 = cv2.imread("./Images/H4.png")


cv2.namedWindow("window", cv2.cv2.WND_PROP_FULLSCREEN)
cv2.setWindowProperty("window",cv2.WND_PROP_FULLSCREEN,cv2.WINDOW_FULLSCREEN)
dim = e1.shape
blackscreen = np.zeros((dim[1],dim[0],3), np.uint8)

#img1 = cv2.rotate(img1, cv2.ROTATE_90_COUNTERCLOCKWISE)
#img2 = cv2.rotate(img2, cv2.ROTATE_90_COUNTERCLOCKWISE)

HOST = '127.0.0.1'
PORT = 65432

with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
    s.bind((HOST, PORT))
    print("attente de msg")
    while True :
        s.listen()
        conn, addr = s.accept()
    
        with conn:
            print("Connected by", addr)
            image = rien
            while True:
                data = conn.recv(1024)
                if not data:
                    break
                data = data.decode('UTF-8')
                print(data)

                saison = "E"

                cv2.imshow("window", image)

                if saison == "E":
                    if data == "1":
                        print("e1")
                        image = e1
                    elif data == "2":
                        print("e2")
                        image = e2
                    elif data == "3":
                        image = e3
                    elif data == "4":
                        image = e4
                    else:
                        image = rien
                elif saison == "H":
                    if data == "1":
                        image = h1
                    elif data == "2":
                        image = h2
                    elif data == "3":
                        image = h3
                    elif data == "4":
                        image = h4
                    else:
                        image = rien

                cv2.imshow("window", image)
                if cv2.waitKey(1) & 0xFF == ord('q'):
                    exit()

    
        

