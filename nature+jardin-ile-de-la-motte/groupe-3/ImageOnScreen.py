from svglib.svglib import svg2rlg
from reportlab.graphics import renderPM
import numpy as np
import cv2

# drawing1 = svg2rlg("./Images/img1.svg")
# renderPM.drawToFile(drawing1, "./Images/img1.png", fmt="PNG")

# drawing2 = svg2rlg("./Images/img2.svg")
# renderPM.drawToFile(drawing2, "./Images/img2.png", fmt="PNG")

img1 = cv2.imread("./Images/img1.png")
img2 = cv2.imread("./Images/Phragmite_des_jocs.png")

cv2.namedWindow("window", cv2.cv2.WND_PROP_FULLSCREEN)
cv2.setWindowProperty("window",cv2.WND_PROP_FULLSCREEN,cv2.WINDOW_FULLSCREEN)
dim = img2.shape
blackscreen = np.zeros((dim[1],dim[0],3), np.uint8)

img1 = cv2.rotate(img1, cv2.ROTATE_90_COUNTERCLOCKWISE)
img2 = cv2.rotate(img2, cv2.ROTATE_90_COUNTERCLOCKWISE)

image = img2
while True:
    cv2.imshow("window", image)
    cond = cv2.waitKey(0)
    if cond & 0xFF == ord('q'): # quit
        break  
    elif cond & 0xFF == ord('1'): # img1
        for i in range(25):
            dst = cv2.addWeighted(blackscreen, i/100, image, (100-i)/100, 0.0)
            cv2.imshow("window", dst)
            cv2.waitKey(1)
        image = img2
    elif cond & 0xFF == ord('2'): # img2
        image = img2

