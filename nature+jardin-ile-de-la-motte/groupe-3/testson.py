from pygame import mixer
import time

mixer.init()
sound=mixer.Sound("Sons/A.1.0.wav")



sound.play(1)
sound.set_volume(0.5)
mixer.stop()

while True:
    pass


