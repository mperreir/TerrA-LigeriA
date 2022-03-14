from threading import Thread
import subprocess

if __name__ == '__main__':

    t1 = Thread(target=subprocess.run, args=(["venv/Scripts/python", "./src/python/ardui.py"],))
    t2 = Thread(target=subprocess.run, args=(["venv/Scripts/python", "./src/python/spectro.py"],))

    t1.daemon = True;
    t2.daemon = True;

    t1.start()
    t2.start()

    t1.join()
    t2.join()