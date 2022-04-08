import sys

import pygame
from pygame.constants import QUIT
from pyjoycon import GyroTrackingJoyCon

cible = pygame.image.load("./src/cible.png")
fpsClock = pygame.time.Clock()
fps = 30


class ConvertCord:
	def __init__(self, l, c, width, height):
		self.l = l
		self.c = c
		self.width = width
		self.height = height

	def __call__(self, cord):
		lx, ly = self.l
		cx, cy = self.c
		x, y = cord
		return (x - lx)/(cx - lx)*self.width, (y - ly)/(cy - ly)*self.height


def calibre(joycon, screen, width, height):
	pos = []
	step = 0
	while True:
		screen.fill("#000000")
		for event in pygame.event.get():
			if event.type == QUIT:
				pygame.quit()
				sys.exit()

		match step:
			case 0:
				screen.blit(cible, (width // 2 - 16, height // 2 - 16))
				if joycon.get_status()["buttons"]["left"]["zl"] or joycon.get_status()["buttons"]["right"]["zr"]:
					GyroTrackingJoyCon.reset_orientation(joycon)
					while joycon.get_status()["buttons"]["left"]["zl"] or joycon.get_status()["buttons"]["right"]["zr"]:
						pass
					step = 1
			case 1:
				screen.blit(cible, (0, 0))
				if joycon.get_status()["buttons"]["left"]["zl"] or joycon.get_status()["buttons"]["right"]["zr"]:
					pos.append(joycon.pointer)
					while joycon.get_status()["buttons"]["left"]["zl"] or joycon.get_status()["buttons"]["right"]["zr"]:
						pass
					step = 2
			case 2:
				screen.blit(cible, (width - 32, 0))
				if joycon.get_status()["buttons"]["left"]["zl"] or joycon.get_status()["buttons"]["right"]["zr"]:
					pos.append(joycon.pointer)
					while joycon.get_status()["buttons"]["left"]["zl"] or joycon.get_status()["buttons"]["right"]["zr"]:
						pass
					step = 3
			case 3:
				screen.blit(cible, (width - 32, height - 32))
				if joycon.get_status()["buttons"]["left"]["zl"] or joycon.get_status()["buttons"]["right"]["zr"]:
					pos.append(joycon.pointer)
					while joycon.get_status()["buttons"]["left"]["zl"] or joycon.get_status()["buttons"]["right"]["zr"]:
						pass
					step = 4
			case 4:
				screen.blit(cible, (0, height - 32))
				if joycon.get_status()["buttons"]["left"]["zl"] or joycon.get_status()["buttons"]["right"]["zr"]:
					pos.append(joycon.pointer)
					while joycon.get_status()["buttons"]["left"]["zl"] or joycon.get_status()["buttons"]["right"]["zr"]:
						pass
					step = 5
			case 5:
				screen.blit(cible, (width // 2 - 16, height // 2 - 16))
				if joycon.get_status()["buttons"]["left"]["zl"] or joycon.get_status()["buttons"]["right"]["zr"]:
					pos.append(joycon.pointer)
					while joycon.get_status()["buttons"]["left"]["zl"] or joycon.get_status()["buttons"]["right"]["zr"]:
						pass
					break
		pygame.display.flip()
		fpsClock.tick(fps)

	return ConvertCord(pos[0], pos[2], width, height)
