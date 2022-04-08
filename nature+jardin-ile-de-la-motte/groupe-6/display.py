import pygame


def textDisplay(screen, text: str, font: str, fontSize: int, color: (int, int, int), coord: tuple[float, float]):
    f = pygame.font.Font(font, fontSize, )
    t = f.render(text, True, (0, 0, 0), color)
    screen.blit(t, coord)
