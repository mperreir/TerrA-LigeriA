import serial

for i in range(1, 10):
	try:
		port_serie = serial.Serial(port=f"COM{i}", baudrate=9600)
		break
	except Exception:
		pass

lastInput = False

def isOn():
	global lastInput
	port_serie.reset_output_buffer()
	while port_serie.in_waiting:
		if (data := str(port_serie.read().decode("ascii"))) in "01":
			lastInput = data == "1"
	return lastInput

if __name__ == "__main__":
	while True:
		print(isOn())


