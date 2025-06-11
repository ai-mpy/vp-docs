#mPythonType:0
from educore import oled, button, ultrasonic, mqttclient, wifi

wifi.connect(ssid='mywifi', psd='123456789', timeout=10000)

mqttclient.connect(server='iot.mpython.cn', port=1883, client_id='a73ac10630', user='a73acV7awT', psd='a73acMdbXg')

import time
k1 = button(button.a)
k2 = button(button.b)
sonic = ultrasonic(sda=1,scl=0)
H = 200
height = 0
c = '1班'
while True:
    height = H - sonic.distance()
    oled.print('身高：' + str(height) + 'cm\n男生请按 k1\n女生请按 k2')
    if k1.status() == 1:
        mqttclient.publish(topic='a73acOQbFR', content=str(c) + ',男,' + str(height))
    if k2.status() == 1:
        mqttclient.publish(topic='a73acOQbFR', content=str(c) + ',女,' + str(height))
    time.sleep(1)
