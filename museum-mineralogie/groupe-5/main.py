from threading import Thread
import subprocess
import os

if __name__ == '__main__':

    dirname = os.path.dirname(__file__)
    t1 = Thread(target=subprocess.run, args=([os.path.join(dirname,"env/Scripts/python"), os.path.join(dirname,"src/python/ardui.py")],))
    t2 = Thread(target=subprocess.run, args=([os.path.join(dirname,"env/Scripts/python"), os.path.join(dirname,"src/python/spectro.py")],))

    t1.daemon = True;
    t2.daemon = True;

    t1.start()
    t2.start()

    t1.join()
    t2.join()