import cv2
import numpy as np

cap = cv2.VideoCapture(1,cv2.CAP_DSHOW)

while 1:
    ret, frame = cap.read()
    # ret will return a true value if the frame exists otherwise False
    into_hsv = cv2.cvtColor(frame, cv2.COLOR_BGR2HSV)
    # changing the color format from BGr to HSV
    # This will be used to create the mask
    LB_limit = np.array([15, 50, 50])  # setting the blue lower limit
    UB_limit = np.array([55, 255, 255])  # setting the blue upper limit

    LG_limit = np.array([30, 50, 50])
    UG_limit = np.array([70, 255, 255])

    b_mask = cv2.inRange(into_hsv, LB_limit, UB_limit)
    g_mask = cv2.inRange(into_hsv, LG_limit, UG_limit)
    # creating the mask using inRange() function
    # this will produce an image where the color of the objects
    # falling in the range will turn white and rest will be black
    blue = cv2.bitwise_and(frame, frame, mask=b_mask)
    green = cv2.bitwise_and(frame, frame, mask=g_mask)
    # this will give the color to mask.
    cv2.imshow('Original', frame)  # to display the original frame
    cv2.imshow('Blue Detector', blue)  # to display the blue object output
    cv2.imshow('Green Detector', green)

    sub_image_frame = frame[0:0+50, 0:0+50]
    sub_image_blue = blue[300:300 + 50, 50:50 + 50]
    sub_image_green = green[0:0 + 50, 0:0 + 50]

    #cv2.imshow('Sub_Original', sub_image_frame)
    cv2.imshow('Sub_Blue Detector', sub_image_blue)
    #cv2.imshow('Sub_Green Detector', sub_image_blue)
    print("Blue : ", sub_image_blue.mean(), "\tGreen : ", sub_image_green.mean())

    if cv2.waitKey(1) == 27:
        break
    # this function will be triggered when the ESC key is pressed
    # and the while loop will terminate and so will the program
cap.release()

cv2.destroyAllWindows()