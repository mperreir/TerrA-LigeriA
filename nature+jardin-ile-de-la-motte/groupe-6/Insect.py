import pygame
import random


def load_image(names,left=True):
    scale = random.randint(30,60)
    res = []
    for i in names:
        print(i)
        image = pygame.image.load(i)
        image = pygame.transform.scale(image, (scale, scale) )
        if left:
            image = pygame.transform.flip(image, True, False)
        res.append(image)
    return res

class Insect(pygame.sprite.Sprite):
    def __init__(self,starting,width,gauche=False):
        super(Insect, self).__init__()
        
        self.images = load_image(['gif/i1.png','gif/i1.png','gif/i2.png','gif/i2.png'], not gauche)
        #self.images.append(load_image('gif/1.png'))

        
        # assuming both images are 64x64 pixels

        self.index = 0
        self.image = self.images[self.index]
        
        
        self.s = starting
        
        self.initx = -random.randint(0,4)*40
        self.gauche = gauche
        self.rect = pygame.Rect(self.initx, starting, 20, 20) if self.gauche else pygame.Rect(width-self.initx, starting, 20, 20)
        
        print(starting)

    def update(self):
        '''This method iterates through the elements inside self.images and 
        displays the next one each tick. For a slower animation, you may want to 
        consider using a timer of some sort so it updates slower.'''
        self.index += 1
        if self.index >= len(self.images):
            self.index = 0
        self.image = self.images[self.index]
        #self.rect = self.image.get_rect()
    def mmove(self,l):
        self.rect.x = self.rect.x + 4 if self.gauche else self.rect.x - 4
        # self.rect.y = self.rect.y   
        #print(self.s + abs(math.log((self.rect.x+0.005)/400))*50)
