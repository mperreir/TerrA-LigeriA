from pygame import mixer
import pygame


mixer.init()
sound = pygame.mixer.Sound("sound.wav")


roseaux = True
sound.play()
sound.stop()

while roseaux:
    print("Press 's' to start, 'p' to pause, 'r' to resume and 'e' to exit the program.")

    commande = input(" ")

    if commande == 's': #start
        sound.play(-1)

    if commande == 'p': #pause
       pygame.mixer.pause()

    elif commande == 'r': #resume
        pygame.mixer.unpause()

    elif commande == 'e': #stop
        sound.stop()
        break
