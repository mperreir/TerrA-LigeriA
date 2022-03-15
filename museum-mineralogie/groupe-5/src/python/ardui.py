# import serial
import time
import parse
import re
from pygame import mixer
import serial.tools.list_ports
from dotenv import load_dotenv
import os

load_dotenv()
PORT = os.getenv('PORT')
FORMAT_STRING = "a(?P<no>[0-9]+)bc(?P<val>[0-9]+)d"
if PORT == "": # if port not defined in .env, we scan devices to try to find it. It is better to define it .env
    for port in list(serial.tools.list_ports.comports()):
        if port[2].startswith('USB VID:PID=2341:0043'):
            PORT = port[0]

arduino = serial.Serial(port = int(PORT),  baudrate =  int(os.getenv('BAUDRATE')))
pins = dict([[pin, "0"] for pin in os.getenv("PINS").split(',')])
currentSong = None
mixer.init()

while True:
    line = arduino.readline().decode('ascii')
    # line='a6bc1d' # test quand pas d'arduino

    d = re.match(FORMAT_STRING, line)
    if(d is not None):
        d=d.groupdict()
        p, v = d["no"], d["val"]

        if(v != pins[p]):
            print(("Set changed for pin {}. New state : {}").format(p,v))
            pins[p] = v
            if v=="1" and p in pins.keys():
                if currentSong is not None:
                    currentSong.stop()

                print("sound playing")
                currentSong = mixer.Sound(os.path.join(os.path.dirname(__file__), "../../records/DUBUISOUND{}.wav".format(p)))
                currentSong.set_volume(.5)
                currentSong.play()
