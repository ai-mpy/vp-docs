#mPythonType:0
from educore import wifi, mqttclient, rgb, light, speaker, abs

wifi.connect(ssid='mywifi', psd='123456789', timeout=10000)

mqttclient.connect(server='iot.mpython.cn', port=1883, client_id='5b47f4466f', user='5b47fRnC3r', psd='5b47f8yBDr')

import time
pxs=rgb(13)
pxs.write(index=[0], r=int(255), g=int(255), b=int(255))
v = light(0).read()
s = speaker()
while True:
    if abs((light(0).read() - v)) > 300:
        s.tone(freq=1000, dur=1000)
        mqttclient.publish(topic='5b47f4HK2Z', content='ID1')
    time.sleep(1)
