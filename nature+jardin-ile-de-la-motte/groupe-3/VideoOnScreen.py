import cv2

cap = cv2.VideoCapture("Composition_1.mp4")

cv2.namedWindow("window", cv2.cv2.WND_PROP_FULLSCREEN)
cv2.setWindowProperty("window",cv2.WND_PROP_FULLSCREEN,cv2.WINDOW_FULLSCREEN)


while cap.isOpened():
    ret, frame = cap.read()
    frame = cv2.rotate(frame, cv2.ROTATE_90_COUNTERCLOCKWISE)
    if ret == True :
        cv2.imshow("window", frame);
        cond = cv2.waitKey(1)

        if cond & 0xFF == ord('q'): # quit
            break  
    else:
        cond = cv2.waitKey(0)
        if cond & 0xFF == ord('c'): # change
            cap = cv2.VideoCapture("Composition_1.mp4")
        if cond & 0xFF == ord('q'): # quit
            break



