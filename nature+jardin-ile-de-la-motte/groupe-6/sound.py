import pygame

pygame.mixer.init()
game_sound = pygame.mixer.music.load("sound.wav")

def resume_music():
    global roseaux
    pygame.mixer.music.unpause()
    roseaux = False

def roseauxOn():
    while not roseaux:
        pygame.mixer.Sound.play(game_sound)
    if roseaux:
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                pygame.quit()
                quit()



