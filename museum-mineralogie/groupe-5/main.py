from threading import Thread
import subprocess
import os

if __name__ == '__main__':

    dirname = os.path.dirname(__file__)
    t1 = Thread(target=subprocess.run, args=(["{}/env/Scripts/python".format(dirname), "{}/src/python/ardui.py".format(dirname)],))
    t2 = Thread(target=subprocess.run, args=(["{}/env/Scripts/python".format(dirname), "{}/src/python/spectro.py".format(dirname)],))

    t1.daemon = True;
    t2.daemon = True;

    t1.start()
    t2.start()

    t1.join()
    t2.join()
