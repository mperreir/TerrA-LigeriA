from time import *
from pprint import pprint
import pyjoycon
from pyjoycon import *
import pygame
import math

joycon_L_id = get_L_id()

class GyroAndButton(
        pyjoycon.GyroTrackingJoyCon,
        pyjoycon.ButtonEventJoyCon,
    ): pass

#joycon = GyroAndButton(*joycon_L_id)
#print(joycon.get_status()["buttons"]["shared"]["minus"])

#for i in range(2000):
#    print("joycon pointer:  ", joycon.pointer)
#    print("joycon rotation: ", joycon.rotation)
#    print("joycon direction:", joycon.direction)
#    print()
#    sleep(0.5)
#    if joycon.get_status()["buttons"]["shared"]["minus"]:
#        GyroTrackingJoyCon.reset_orientation(joycon)

def verif(birds : dict[str, tuple[float, float]], coord : tuple[float, float]) :
    for b in birds:
        if math.dist(birds[b], coord) < 20:
            del birds[b]
            return b
    return None





