# Import pygame
import pygame
import time
import socket


# Initialise pygame
pygame.init()
# Set window size
width = pygame.display.Info().current_w
height = pygame.display.Info().current_h
size = (width,height)
screen = pygame.display.set_mode(size)

# Clock
clock = pygame.time.Clock()

# Load image
rien = pygame.image.load('./Images/rien.png').convert()

#H0 = pygame.image.load('./Images/H0.png').convert()
H1 = pygame.image.load('./Images/H1.png').convert()
H2 = pygame.image.load('./Images/H2.png').convert()
H3 = pygame.image.load('./Images/H3.png').convert()
H4 = pygame.image.load('./Images/H4.png').convert()

#E0 = pygame.image.load('./Images/E0.png').convert()
E1 = pygame.image.load('./Images/E1.png').convert()
E2 = pygame.image.load('./Images/E2.png').convert()
E3 = pygame.image.load('./Images/E3.png').convert()
E4 = pygame.image.load('./Images/E4.png').convert()

# Set the size for the image
DEFAULT_IMAGE_SIZE = size

# Scale the image to your needed size
#H0 = pygame.transform.scale(H0, DEFAULT_IMAGE_SIZE)
H1 = pygame.transform.scale(H1, DEFAULT_IMAGE_SIZE)
H2 = pygame.transform.scale(H2, DEFAULT_IMAGE_SIZE)
H3 = pygame.transform.scale(H3, DEFAULT_IMAGE_SIZE)
H4 = pygame.transform.scale(H4, DEFAULT_IMAGE_SIZE)

#E0 = pygame.transform.scale(E0, DEFAULT_IMAGE_SIZE)
E1 = pygame.transform.scale(E1, DEFAULT_IMAGE_SIZE)
E2 = pygame.transform.scale(E2, DEFAULT_IMAGE_SIZE)
E3 = pygame.transform.scale(E3, DEFAULT_IMAGE_SIZE)
E4 = pygame.transform.scale(E4, DEFAULT_IMAGE_SIZE)

HOST = '127.0.0.1'
PORT = 65432

# Set a default position
image_rect = rien.get_rect()
image_rect.center = (0,0)
img_center = (0,0)
# Prepare loop condition
running = False


def fadeIn(img, center):
    for i in range(127):
        screen.fill((0,0,0))    
        image.set_alpha(2*i)    
        screen.blit(img, center)    
        pygame.display.update()    
        time.sleep(0.001)

def fadeOut(img, center):
    for i in range (127, 0, -1):
        screen.fill((0,0,0))       
        image.set_alpha(2*i)    
        screen.blit(img, center)    
        pygame.display.update()    
        time.sleep(0.001)


with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
    s.bind((HOST, PORT))
    print("attente de msg")
    while True :
        s.listen()
        conn, addr = s.accept()
    
        with conn:
            print("Connected by", addr)
            image = rien
            while not running:
                data = conn.recv(1024)
                if not data:
                    break
                data = data.decode('UTF-8')
                print(data)

                saison = 'E'
                for event in pygame.event.get():
                    if event.type == pygame.QUIT:
                        running = True
                    fadeIn(image, img_center)
                    if saison == "E":
                        if data == "1":
                            print("e1")
                            fadeOut(image, img_center)
                            image = E1
                        elif data == "2":
                            print("e2")
                            fadeOut(image, img_center)
                            image = E2
                        elif data == "3":
                            fadeOut(image, img_center)
                            image = E3
                        elif data == "4":
                            fadeOut(image, img_center)
                            image = E4
                        else:
                            fadeOut(image, img_center)
                            image = rien
                    elif saison == "H":
                        if data == "1":
                            fadeOut(image, img_center)
                            image = H1
                        elif data == "2":
                            fadeOut(image, img_center)
                            image = H2
                        elif data == "3":
                            fadeOut(image, img_center)
                            image = H3
                        elif data == "4":
                            fadeOut(image, img_center)
                            image = H4
                        else:
                            fadeOut(image, img_center)
                            image = rien



# Event loop
while not running:

    # Close window event
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = True

    screen.fill((130,130,130))


    # Show the image
    fadeIn(image, image_rect.center)
    time.sleep(1)
    fadeOut(image, image_rect.center)
	# Part of event loop
    pygame.display.flip()
    clock.tick(30)
