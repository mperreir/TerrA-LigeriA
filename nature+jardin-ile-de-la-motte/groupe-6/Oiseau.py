import pygame
import random


def load_image(names):
    scale = random.randint(30, 60)
    res = []
    for i in names:
        print(i)
        image = pygame.image.load(i)
        image = pygame.transform.scale(image, (scale, scale))
        res.append(image)
        res.append(image)
    return res


class Oiseau(pygame.sprite.Sprite):
    def __init__(self, starting, width, gauche=False):
        super(Oiseau, self).__init__()
        self.right = bool(random.randint(0, 1))
        self.images = []
        self.images = load_image(
            ["./gif/11.png", "./gif/12.png", "./gif/13.png", "./gif/14.png", "./gif/15.png", "./gif/17.png",
             "./gif/18.png", "./gif/19.png", "./gif/120.png"])
        # assuming both images are 64x64 pixels

        self.index = 0
        self.image = self.images[self.index]

        self.s = starting

        self.initx = random.randint(-5, 3) * 50
        self.gauche = gauche
        self.rect = pygame.Rect(self.initx, starting, 20, 20) if self.gauche else pygame.Rect(width - self.initx,
                                                                                              starting, 20, 20)

    def update(self):
        '''This method iterates through the elements inside self.images and
        displays the next one each tick. For a slower animation, you may want to 
        consider using a timer of some sort so it updates slower.'''
        self.index += 1
        if self.index >= len(self.images):
            self.index = 0
        self.image = self.images[self.index]
        # self.rect = self.image.get_rect()

    def mmove(self, l):
        self.rect.x = self.rect.x + l[0] if self.gauche else self.rect.x - l[0]
        self.rect.y = self.rect.y - l[1]
        # print(self.s + abs(math.log((self.rect.x+0.005)/400))*50)


import random

oiseaux = {
    "aigrette_garzette": ["e", "a", "h", "p"],
    "becassine_des_marais": ["p"],
    "becassine_sourde": ["e", "a", "h", "p"],
    "bouscarle_de_cetti": ["e", "a", "h", "p"],
    "courlis_cendre": ["e", "a", "h", "p"],
    "cygne_tubercule": ["e", "a", "h", "p"],
    "epervier_d_europe": ["e", "a", "h", "p"],
    "faisan_de_colchide": ["e", "a", "h", "p"],
    "mesange_bleue": ["e", "a", "h", "p"],
    "pic_epeiche": ["e", "a", "h", "p"],
    "sarcelle_d_hiver": ["h"],
    "troglodyte_mignon": ["e", "a", "h", "p"],
    "plastique": ["e", "a", "h", "p"]
}

animaux = {
    "castor": ["e", "a", "h", "p"],
    "canette": ["e", "a", "h", "p"],
}


def getOiseau(saison):
    possible = [oiseau for oiseau, biome in oiseaux.items() if saison in biome]
    return random.choice(possible)

def getAnimaux(saison):
    possible = [animal for animal, biome in animaux.items() if saison in biome]
    return random.choice(possible)
