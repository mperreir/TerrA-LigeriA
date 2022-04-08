from time import *
from pprint import pprint
import pyjoycon
from pyjoycon import *
import pygame
import math
import random
import sys
import joycon

import pygame
from pygame.locals import *
from calibre import calibre
pygame.init()

# variable
width, height = 1920, 1080
cx, cy = 1, 1
speed = [3, 1]

screen = pygame.display.set_mode((width, height))
fps = 30
fpsClock = pygame.time.Clock()
# Game loop.
i = 0

background_image = pygame.image.load("bg.jpg").convert()


def load_image(name):
    image = pygame.image.load(name)
    return image

my_sprite = pygame.image.load("src/circle.png")


joycon_L_id = get_L_id()

class GyroAndButton(
        pyjoycon.GyroTrackingJoyCon,
        pyjoycon.ButtonEventJoyCon,
    ): pass


joycon = GyroAndButton(*joycon_L_id)
print(joycon.get_status()["buttons"])

x,y = 0,0
convertCord = calibre(joycon, screen, width, height)
while True:
    if joycon.get_status()["buttons"]["shared"]["minus"]:
        convertCord = calibre(joycon, screen, width, height)
    screen.blit(background_image, [0, 0])

    # birdRect = birdRect.move(speed)

    # if birdRect.left < 0 or birdRect.right > width:
    #     speed[0] = -speed[0]
    # if birdRect.top < 0 or birdRect.bottom > height:
    #     speed[1] = -speed[1]

    for event in pygame.event.get():
        if event.type == QUIT:
            pygame.quit()
            sys.exit()

    # Update.

    # Draw.
    if joycon.pointer:
        x, y = convertCord(joycon.pointer)
    print(x,y)
    screen.blit(my_sprite, (x,y))
    pygame.display.flip()
    fpsClock.tick(fps)

    #Verification.
    birds = dict()
    birds["canard"] = tuple(0,0.8)

    if joycon.verif(birds, joycon) :
        print("true")


