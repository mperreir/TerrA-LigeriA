import imp
import math
import random
import sys
import time

import pygame
import joycon
from pyjoycon import *
from pygame.locals import *
from Oiseau import *
from Insect import Insect
from btn import isOn

from calibre import calibre
from Oiseau import *
from Insect import Insect
pygame.init()

# variable
width, height = 1536, 864
speed = [3, 3]

screen = pygame.display.set_mode((width, height))
fps = 30
fpsClock = pygame.time.Clock()
# Game loop.
i = 0

#pour jouer en boucle
pygame.mixer.music.load('./sound/ile_de_la_motte_.mp3')
sound = pygame.mixer.Sound('./sound/Capture.wav')
pygame.mixer.music.play(-1)

def load_image(names):
	scale = random.randint(30, 60)
	res = []
	for i in names:
		print(i)
		image = pygame.image.load(i)
		image = pygame.transform.scale(image, (scale, scale))
		res.append(image)
	return res


biomes = ["a1","p1","e1","h1"]
biome = f"./bgs/{biomes[random.randint(0, len(biomes) - 1)]}.jpg"
bg = pygame.image.load(biome)
bg = pygame.transform.scale(bg, (width, height))

infoBg = pygame.image.load("./src/infoBg.png")
infoBg = pygame.transform.scale(infoBg, (width, height))

viseur = pygame.image.load("./src/viseur.png")
viseur = pygame.transform.scale(viseur, (26, 26))



joycon_L_id = get_L_id()
if joycon_L_id == (None, None, None):
	joycon_L_id = get_R_id()
myJoycon = joycon.GyroAndButton(*joycon_L_id)
convertCord = calibre(myJoycon, screen, width, height)


def game():
	global convertCord
	gameOn = True
	x, y = 0, 0

	o1, o2, i1, i2 = Oiseau(random.randint((height // 100) - 1, (height // 100) + 1) * 100, width, True), \
					 Oiseau(random.randint((height // 100) - 1, (height // 100) + 1) * 100, width, False), \
					 Insect(height*0.8, width, True),\
					 Insect(height*0.85, width, False)
	go1, go2, gi1, gi2 = pygame.sprite.Group(o1), pygame.sprite.Group(o2), pygame.sprite.Group(i1), pygame.sprite.Group(i2)

	biome = f"./bgs/{biomes[random.randint(0, len(biomes) - 1)]}.png"
	bg = pygame.image.load(biome)
	bg = pygame.transform.scale(bg, (width, height))
	lastRefrecheIsOn = time.time()
	while gameOn:
		if myJoycon.get_status()["buttons"]["shared"]["minus"] or myJoycon.get_status()["buttons"]["shared"]["plus"]:
			convertCord = calibre(myJoycon, screen, width, height)
		screen.blit(bg, [0, 0])

		for event in pygame.event.get():
			if event.type == QUIT:
				pygame.quit()
				sys.exit()

		# Update.

		# Draw.
		go1.update()
		go2.update()
		gi1.update()
		gi2.update()

		o1.mmove(speed)
		o2.mmove(speed)
		i1.mmove(speed)
		i2.mmove(speed)

		screen.blit(o1.image, o1.rect)
		screen.blit(o2.image, o2.rect)
		screen.blit(i1.image, i1.rect)
		screen.blit(i2.image, i2.rect)

		birds = dict()
		birds["o1"] = (o1.rect.centerx, o1.rect.centery)
		birds["o2"] = (o2.rect.centerx, o2.rect.centery)
		animals = dict()
		animals["i1"] = (i1.rect.centerx, i1.rect.centery)
		animals["i2"] = (i2.rect.centerx, i2.rect.centery)
		if myJoycon.pointer:
			x, y = convertCord(myJoycon.pointer)
		screen.blit(viseur, (x,y))

		if (myJoycon.get_status()["buttons"]["left"]["zl"] or myJoycon.get_status()["buttons"]["right"]["zr"]) and joycon.verif(birds, (x, y)):
			sound.play()
			infoBg = pygame.image.load(f"./pages/{getOiseau(biome[6])}.png")
			infoBg = pygame.transform.scale(infoBg, (width, height))
			screen.blit(infoBg, [0, 0])
			pygame.display.flip()
			time.sleep(5)
			while isOn() and (
					not myJoycon.get_status()["buttons"]["left"]["zl"] or myJoycon.get_status()["buttons"]["right"][
				"zr"]):
				pass


		if (myJoycon.get_status()["buttons"]["left"]["zl"] or myJoycon.get_status()["buttons"]["right"]["zr"]) and joycon.verif(animals, (x, y)):
			sound.play()
			infoBg = pygame.image.load(f"./pages/{getAnimaux(biome[6])}.png")
			infoBg = pygame.transform.scale(infoBg, (width, height))
			screen.blit(infoBg, [0, 0])
			pygame.display.flip()
			time.sleep(5)
			while isOn() and (not myJoycon.get_status()["buttons"]["left"]["zl"] or myJoycon.get_status()["buttons"]["right"]["zr"]):
				pass


		if lastRefrecheIsOn + 0.5 < time.time():
			print("hey")
			if not isOn():
				print("break")
				break

			else:
				lastRefrecheIsOn = time.time()

		pygame.display.flip()
		fpsClock.tick(fps)



while True:
	screen.fill((0, 0, 0))
	pygame.display.flip()
	fpsClock.tick(fps)
	while not isOn():
		pygame.display.flip()
		fpsClock.tick(fps)
	game()
	game()
	game()
	game()

