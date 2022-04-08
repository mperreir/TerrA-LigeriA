import cv2
import pyo as p
import time
from dotenv import load_dotenv
import os

load_dotenv()
PIERRE_DEVANT_SPECTRO = True
Porteuses = [62, 262, 294, 330, 392, 699]
SAMPLING = 100
COUNT = 0
L = []


def calibrate(cap):
    print("Calibrating...")
    time.sleep(1)
    while True:
        ret, frame = cap.read()
        cv2.imshow('frame', frame)
        if cv2.waitKey(1) & 0xFF == ord('r'):
            r = cv2.selectROI(frame)
            break
    cv2.destroyAllWindows()
    print("Calibration done.\n")
    return r


def crop_roi(image, roi):
    cropped = image[int(roi[1]):int(roi[1] + roi[3]), int(roi[0]):int(roi[0] + roi[2])]
    return cropped


def init_s():
    s = p.Server(buffersize=1024, duplex=0, winhost='directsound', nchnls=6)
    s.verbosity = 0
    return s


def ping_speakers(s):
    print("Pinging speakers...")
    for i in range(6):
        print("-> Speaker " + str(i))
        try:
            s.boot().start()
            a = p.Sine(freq=Porteuses[i], mul=.2).out(i)
            time.sleep(.4)
            s.stop()
            s.shutdown()
            print("     Success")
        except:
            print("     Fail")
    print("All Speakers were Pinged.\n")


def moy(T):
    t = 0
    for x in T:
        t += x
    return t/len(T)


def separate_colors(wavelength, intensities):
    Red, Orange, Yellow, Green, Blue, Purple = [], [], [], [], [], []
    for i in range(len(wavelength)):
        if wavelength[i] >= 660:
            Red.append(intensities[i])
        elif wavelength[i] >= 610:
            Orange.append(intensities[i])
        elif wavelength[i] >= 560:
            Yellow.append(intensities[i])
        elif wavelength[i] >= 510:
            Green.append(intensities[i])
        elif wavelength[i] >= 440:
            Blue.append(intensities[i])
        else:
            Purple.append(intensities[i])
    return [moy(Purple), moy(Blue), moy(Green), moy(Yellow), moy(Orange), moy(Red)]


def formula(R8bit,G8bit,B8bit):
    RsRGB = R8bit / 255
    GsRGB = G8bit / 255
    BsRGB = B8bit / 255

    if RsRGB <= 0.03928:
        R = RsRGB / 12.92
    else:
        R = ((RsRGB + 0.055) / 1.055) ** 2.4
    if GsRGB <= 0.03928:
        G = GsRGB / 12.92
    else:
        G = ((GsRGB + 0.055) / 1.055) ** 2.4
    if BsRGB <= 0.03928:
        B = BsRGB / 12.92
    else:
        B = ((BsRGB + 0.055) / 1.055) ** 2.4
    #lumi = 0.2126 * R + 0.7152 * G + 0.0722 * B
    lumi = R + G + B
    return lumi


def analyze(frame):
    height = len(frame)
    width = len(frame[0])
    delta = 400 / SAMPLING
    lmbd = 380
    wavelength = []
    intensities = []
    for c in range(0,SAMPLING):
        g = (width*c)//SAMPLING
        d = (width*(c+1))//SAMPLING
        if c == (SAMPLING-1):
            d = width-1
        lumi = 0
        for j in range(g,d):
            for i in range(height):
                B8bit = frame[i][j][0]
                G8bit = frame[i][j][1]
                R8bit = frame[i][j][2]
                lumi += formula(R8bit, G8bit, B8bit)
        lumi /= height*(d-g)
        wavelength.append(lmbd)
        intensities.append(lumi)
        lmbd += delta

    return (wavelength,intensities)


def out_sound(s, Mul):
    s.boot().start()
    for i in range(6):
        rd = (Mul[i]/Mul[0]+Mul[0]/Mul[2])

        a = p.Sine(freq=Porteuses[i], mul=Mul[i]).out(i)
        lfo3 = p.Sine(freq=0.3*(rd%2), phase=rd%1).range(0, 0.3)
        #a = p.SineLoop(freq=Porteuses[i], feedback=lfo3, mul=Mul[i])
        a = p.SineLoop(freq=Porteuses[i] * (1 + rd % 1), feedback=lfo3, mul=Mul[i])

        a.out(i)
        L.append(a)


def cast_float(l):
    lr=[]
    for x in l:
        lr.append(float(x))
    return lr


if __name__ == "__main__":
    print("Initiating image.")
    cap = cv2.VideoCapture(cv2.CAP_DSHOW + int(os.getenv('CAPTURE_DEVICE')))
    r = calibrate(cap)

    print("Initiating sound.")
    s = init_s()
    #ping_speakers(s)

    while True:
        COUNT += 1
        print(" - Scan number " + str(COUNT) + ".")
        k = cv2.waitKey(1)
        if k & 0xFF == ord('q'):
            print("pause")
            while True:
                k = cv2.waitKey(1)
                if k & 0xFF == ord('dqr'):
                    break
            print("play")
        if PIERRE_DEVANT_SPECTRO:
            ret, frame = cap.read()
            to_scan = crop_roi(frame, r)
            cv2.imshow('crop', to_scan)

            (wavelength, intensities) = analyze(to_scan)
            Mul_numpy = separate_colors(wavelength, intensities)
            Mul = cast_float(Mul_numpy)

            print(intensities)

            out_sound(s, Mul)
            time.sleep(5)
            s.stop()
            s.shutdown()

    cap.release()
    cv2.destroyAllWindows()

    s.stop()
    s.shutdown()