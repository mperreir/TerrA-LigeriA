from pygame import mixer
import pygame


mixer.init()
sound = pygame.mixer.Sound("bg_sound.mp3")

class Roseaux:

    def __init__(self, state = True, bg_sound = sound):
        self.state = state
        self.bg_sound = bg_sound

    def toggle(self):
        if self.state == True:
            self.state = False
        else:
            self.state = True

    def start(self):
        if self.state == True:
            mixer.init()
            while True:
                self.bg_sound.play(-1)
                print("Background music playing")
        else:
            pygame.mixer.pause()

